import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@WebSocketGateway({ cors: { origin: ['http://localhost:3000', 'http://localhost:5173', 'http://192.168.42.39:3000', 'http://172.25.11.20:3000', 'http://192.168.42.39:5173', 'http://172.25.11.20:5173'], credentials: true } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private onlineUsers = new Map<number, string>();

  constructor(
    private jwtService: JwtService,
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
  ) {}

  getPrivateRoom(userId1: number, userId2: number): string {
    return [Math.min(userId1, userId2), Math.max(userId1, userId2)].join('-');
  }

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth?.token;
      if (!token) {
        client.disconnect();
        return;
      }
      const payload = this.jwtService.verify(token);
      client.data.user = payload;
      client.join(`user-${payload.sub}`);
      this.onlineUsers.set(payload.sub, client.id);

      this.server.emit('onlineUsers', Array.from(this.onlineUsers.keys()));
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    if (client.data.user) {
      this.onlineUsers.delete(client.data.user.sub);
      this.server.emit('onlineUsers', Array.from(this.onlineUsers.keys()));
    }
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: {
      text: string;
      room?: string;
      recipientId?: number;
      fileName?: string;
      filePath?: string;
      fileType?: string;
      fileSize?: number;
    },
  ) {
    const user = client.data.user;
    let roomName = data.room;

    if (data.recipientId) {
      roomName = this.getPrivateRoom(user.sub, data.recipientId);
    }

    if (!roomName) {
      roomName = 'general';
    }

    if (roomName === 'general' && !user.isAdmin) {
      return { error: 'فقط ادمین‌ها می‌توانند در عمومی پیام بفرستند' };
    }

    const msgData: Partial<Message> = {
      senderId: user.sub,
      senderName: user.username,
      room: roomName,
    };
    if (data.text) msgData.text = data.text;
    if (data.fileName) msgData.fileName = data.fileName;
    if (data.filePath) msgData.filePath = data.filePath;
    if (data.fileType) msgData.fileType = data.fileType;
    if (data.fileSize) msgData.fileSize = data.fileSize;
    const msg = this.messageRepo.create(msgData as Message);
    await this.messageRepo.save(msg);

    const payload = {
      id: msg.id,
      text: msg.text || null,
      senderId: msg.senderId,
      senderName: msg.senderName,
      room: msg.room,
      fileName: msg.fileName || null,
      filePath: msg.filePath || null,
      fileType: msg.fileType || null,
      fileSize: msg.fileSize || null,
      createdAt: msg.createdAt,
    };

    this.server.to(roomName).emit('newMessage', payload);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@ConnectedSocket() client: Socket, @MessageBody() room: string) {
    client.join(room);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@ConnectedSocket() client: Socket, @MessageBody() room: string) {
    client.leave(room);
  }

  @SubscribeMessage('deleteMessage')
  async handleDeleteMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: number; recipientId?: number; room?: string },
  ) {
    const user = client.data.user;
    const msg = await this.messageRepo.findOne({ where: { id: data.messageId } });
    if (!msg) return { error: 'پیام یافت نشد' };

    const ageMs = Date.now() - new Date(msg.createdAt).getTime();
    const within60s = ageMs < 60000;
    const isSender = msg.senderId === user.sub;

    if (within60s) {
      await this.messageRepo.remove(msg);
      let roomName = msg.room || 'general';
      this.server.to(roomName).emit('messageDeleted', { messageId: msg.id, hard: true });
      return { ok: true, hard: true };
    }

    if (!isSender) {
      return { error: 'فقط فرستنده می‌تواند پیام را پس از ۶۰ ثانیه حذف کند' };
    }

    if (!msg.deletedBy) msg.deletedBy = [];
    if (!msg.deletedBy.includes(user.sub)) {
      msg.deletedBy.push(user.sub);
      await this.messageRepo.save(msg);
    }
    let roomName = msg.room || 'general';
    this.server.to(roomName).emit('messageDeleted', { messageId: msg.id, hard: false, deletedBy: msg.deletedBy });
    return { ok: true, hard: false };
  }

  @SubscribeMessage('joinPrivateChat')
  handleJoinPrivateChat(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { recipientId: number },
  ) {
    const room = this.getPrivateRoom(client.data.user.sub, data.recipientId);
    client.join(room);
    return { room };
  }
}
