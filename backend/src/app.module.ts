import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { DepartmentModule } from './department/department.module';
import { User } from './auth/user.entity';
import { Message } from './chat/message.entity';
import { Department } from './department/department.entity';
import { FileSettings } from './chat/file-settings.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '97531372',
      database: 'messenger',
      entities: [User, Message, Department, FileSettings],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/chat/files',
    }),
    AuthModule,
    ChatModule,
    DepartmentModule,
  ],
})
export class AppModule {}
