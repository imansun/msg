import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { randomUUID } from 'crypto';
import { Message } from './message.entity';
import { FileSettings } from './file-settings.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';

const UPLOADS_DIR = path.join(__dirname, '..', '..', 'uploads');

@Controller('chat')
export class ChatController {
  constructor(
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
    @InjectRepository(FileSettings)
    private settingsRepo: Repository<FileSettings>,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('messages')
  async getMessages(@Query('room') room?: string, @Query('userId') userId?: string) {
    const where = room ? { room } : {};
    const msgs = await this.messageRepo.find({
      where,
      order: { createdAt: 'DESC' },
      take: 50,
    });
    const reversed = msgs.reverse();
    if (!userId) return reversed;
    const uid = parseInt(userId, 10);
    return reversed.filter((m) => {
      if (!m.deletedBy) return true;
      return !m.deletedBy.includes(uid);
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('settings')
  async getSettings() {
    let settings = await this.settingsRepo.findOne({ where: { id: 1 } });
    if (!settings) {
      settings = this.settingsRepo.create({
        maxFileSizeMB: 6,
        allowedExtensions: ['.pdf', '.docx', '.xlsx', '.pptx', '.txt'],
      });
      await this.settingsRepo.save(settings);
    }
    return {
      maxFileSizeMB: settings.maxFileSizeMB,
      allowedExtensions: settings.allowedExtensions,
    };
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Put('settings')
  async updateSettings(body: {
    maxFileSizeMB?: number;
    allowedExtensions?: string[];
  }) {
    let settings = await this.settingsRepo.findOne({ where: { id: 1 } });
    if (!settings) {
      settings = this.settingsRepo.create({
        maxFileSizeMB: 6,
        allowedExtensions: ['.pdf', '.docx', '.xlsx', '.pptx', '.txt'],
      });
    }
    if (body.maxFileSizeMB !== undefined) {
      settings.maxFileSizeMB = Math.max(1, Math.min(100, body.maxFileSizeMB));
    }
    if (body.allowedExtensions !== undefined) {
      settings.allowedExtensions = body.allowedExtensions.map((ext) =>
        ext.startsWith('.') ? ext.toLowerCase() : `.${ext.toLowerCase()}`,
      );
    }
    await this.settingsRepo.save(settings);
    return {
      maxFileSizeMB: settings.maxFileSizeMB,
      allowedExtensions: settings.allowedExtensions,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: UPLOADS_DIR,
        filename: (_req, file, cb) => {
          const decodedName = Buffer.from(file.originalname, 'latin1').toString('utf8');
          const ext = path.extname(decodedName).toLowerCase();
          cb(null, `${randomUUID()}${ext}`);
        },
      }),
      limits: { fileSize: 100 * 1024 * 1024 },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { error: 'فایلی ارسال نشد' };
    }

    const decodedName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const ext = path.extname(decodedName).toLowerCase();

    const settings = await this.settingsRepo.findOne({ where: { id: 1 } });
    const allowed = settings?.allowedExtensions || [
      '.pdf', '.docx', '.xlsx', '.pptx', '.txt',
    ];
    const maxSizeMB = settings?.maxFileSizeMB || 6;

    if (!allowed.includes(ext)) {
      fs.unlinkSync(file.path);
      return {
        error: `پسوند فایل مجاز نیست. پسوندهای مجاز: ${allowed.join(', ')}`,
      };
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      fs.unlinkSync(file.path);
      return {
        error: `حجم فایل از ${maxSizeMB} مگابایت بیشتر است`,
      };
    }

    return {
      fileName: decodedName,
      filePath: `/chat/files/${file.filename}`,
      fileType: ext,
      fileSize: file.size,
    };
  }

  @Get('files/:filename')
  serveFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = path.join(UPLOADS_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'فایل یافت نشد' });
    }
    return res.sendFile(filePath);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete('messages')
  async clearAllMessages() {
    await this.messageRepo.clear();
    return { message: 'تمام پیام‌ها حذف شدند' };
  }
}
