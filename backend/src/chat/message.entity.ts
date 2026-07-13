import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  text: string;

  @Column()
  senderId: number;

  @Column()
  senderName: string;

  @Column({ nullable: true })
  room: string;

  @Column({ nullable: true })
  fileName: string;

  @Column({ nullable: true })
  filePath: string;

  @Column({ nullable: true })
  fileType: string;

  @Column({ nullable: true })
  fileSize: number;

  @Column({ type: 'simple-json', nullable: true })
  deletedBy: number[];

  @CreateDateColumn({ precision: 3 })
  createdAt: Date;
}
