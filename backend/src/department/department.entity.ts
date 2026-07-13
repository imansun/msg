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

export type LocaleDict = Record<string, string>;

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: LocaleDict;

  @Column('jsonb', { nullable: true })
  description: LocaleDict | null;

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
