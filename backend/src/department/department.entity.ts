import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  level: number;

  @ManyToOne(() => Department, (dept) => dept.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'parentId' })
  parent: Department | null;

  @Column({ nullable: true })
  parentId: number | null;

  @OneToMany(() => Department, (dept) => dept.parent)
  children: Department[];

  @ManyToMany(() => User, (user) => user.departments)
  members: User[];

  @CreateDateColumn()
  createdAt: Date;
}
