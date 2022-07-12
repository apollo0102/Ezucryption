import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/users.entity';

@Index(['id'])
@Index(['userId', 'title'], { unique: true })
@Entity('press', { schema: 'public' })
export class Press {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', { name: 'title', nullable: false, length: 250 })
  title: string;

  @Column('character varying', { name: 'link', length: 1000 })
  link: string | null;

  @Column({ type: 'date', name: 'date' })
  date: Date;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  // This column states that who created this ROLE
  @ManyToOne((type) => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  userId: string;
}
