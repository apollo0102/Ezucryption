import {
  Column,
  Index,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { User } from 'src/users/users.entity';

@Entity('user_exhibitions', { schema: 'public' })
export class UserExhibition {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('character varying', { name: 'title', nullable: false, length: 250 })
  title: string;

  @Column('character varying', { name: 'galary', nullable: false, length: 250 })
  galary: string;

  @Column('character varying', { name: 'url', nullable: false, length: 250 })
  url: string;

  @Column('int', { name: 'month' })
  month: number;

  @Column('int', { name: 'year' })
  year: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne((type) => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  userId: User | string;
}
