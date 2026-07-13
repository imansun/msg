import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Message } from './message.entity';
import { FileSettings } from './file-settings.entity';
import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, FileSettings]),
    JwtModule.register({
      secret: 'messenger-secret-key-2024',
    }),
  ],
  providers: [ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}
