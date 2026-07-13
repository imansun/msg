import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FileSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 6 })
  maxFileSizeMB: number;

  @Column('simple-array', {
    default: '.pdf,.docx,.xlsx,.pptx,.txt',
  })
  allowedExtensions: string[];
}
