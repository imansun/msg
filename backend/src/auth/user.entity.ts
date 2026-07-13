import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', nullable: true })
  displayName: string | null;

  @Column({ type: 'varchar', nullable: true })
  windowsUser: string | null;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  ip: string;

  @Column({ nullable: true })
  fingerprint: string;

  @ManyToMany(() => Department, (dept) => dept.members, { eager: false })
  @JoinTable({ name: 'user_departments' })
  departments: Department[];

  @CreateDateColumn()
  createdAt: Date;
}
