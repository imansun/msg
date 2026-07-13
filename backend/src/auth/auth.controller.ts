import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  UseGuards,
  Param,
  ParseIntPipe,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as os from 'os';
import * as crypto from 'crypto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AdminGuard } from './admin.guard';
import { searchAdUsers } from './ldap.service';

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'] as string;
  if (forwarded) return forwarded.split(',')[0].trim();

  let remote = req.socket.remoteAddress || '';
  remote = remote.replace(/^::ffff:/, '');
  if (remote === '::1' || remote === '127.0.0.1') {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] || []) {
        if (net.family === 'IPv4' && !net.internal) return net.address;
      }
    }
  }
  return remote;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto, @Req() req: Request) {
    const serverIp = getClientIp(req);
    const ip = dto.clientIp || serverIp;
    return this.authService.register(dto, ip);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('pending')
  getPendingUsers() {
    return this.authService.getPendingUsers();
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('users')
  getAllUsers() {
    return this.authService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('approve/:id')
  approveUser(@Param('id', ParseIntPipe) id: number) {
    return this.authService.approveUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return this.authService.getMe(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('approved')
  getApprovedUsers(@Req() req: any) {
    return this.authService.getApprovedUsers(req.user.id);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('reject/:id')
  rejectUser(@Param('id', ParseIntPipe) id: number) {
    return this.authService.rejectUser(id);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('ad/search')
  async searchAd(@Query('q') q: string) {
    return searchAdUsers(q || '');
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('link-ad/:id')
  async linkAd(@Param('id', ParseIntPipe) id: number, @Body() body: { adUsername: string }) {
    return this.authService.linkAdUser(id, body.adUsername);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('toggle-active/:id')
  toggleActive(@Param('id', ParseIntPipe) id: number) {
    return this.authService.toggleActive(id);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('assign-departments/:id')
  assignDepartments(
    @Param('id', ParseIntPipe) id: number,
    @Body('departmentIds') departmentIds: number[],
  ) {
    return this.authService.assignDepartments(id, departmentIds || []);
  }

  @Get('detect-windows-user')
  detectWindowsUser(@Req() req: Request, @Res() res: Response) {
    const authHeader = req.headers['authorization'] || '';

    if (authHeader.startsWith('NTLM ')) {
      try {
        const buf = Buffer.from(authHeader.slice(5), 'base64');
        if (buf.length >= 8 && buf.readUInt32LE(0) === 0x00000003) {
          const len2 = buf.readUInt16LE(12);
          const off2 = buf.readUInt32LE(16);
          const len3 = buf.readUInt16LE(20);
          const off3 = buf.readUInt32LE(24);
          const domain = buf.toString('utf16le', off2, off2 + len2);
          const user = buf.toString('utf16le', off3, off3 + len3);
          const sAMAccountName = user.includes('\\') ? user.split('\\').pop()! : user;
          return res.json({ windowsUser: sAMAccountName, domain: domain || null });
        }
      } catch {}
    }

    if (authHeader.startsWith('Negotiate ')) {
      try {
        const buf = Buffer.from(authHeader.slice(10), 'base64');
        if (buf.length >= 8 && buf.readUInt32LE(0) === 0x00000003) {
          const len2 = buf.readUInt16LE(12);
          const off2 = buf.readUInt32LE(16);
          const len3 = buf.readUInt16LE(20);
          const off3 = buf.readUInt32LE(24);
          const domain = buf.toString('utf16le', off2, off2 + len2);
          const user = buf.toString('utf16le', off3, off3 + len3);
          const sAMAccountName = user.includes('\\') ? user.split('\\').pop()! : user;
          return res.json({ windowsUser: sAMAccountName, domain: domain || null });
        }
      } catch {}
    }

    return res.json({ windowsUser: null });
  }
}
