import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';

import { User } from 'src/users/users.entity';

enum PublicityType {
  follower,
  like,
}

@Index(['publicityType', 'userId', 'primaryId'], { unique: true })
@Entity('followers_likes', { schema: 'public' })
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'primary_type',
    nullable: false,
    length: 50,
  },
})
export default class FollowerLike {
  @PrimaryGeneratedColumn()
  id: number;

  // Defining what is the type of publicity (Follower, Like)
  @Column({
    type: 'enum',
    enum: PublicityType,
    name: 'publicity_type',
  })
  publicityType: PublicityType;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  // This column states the user who either followed or liked
  @ManyToOne((type) => User, (user) => user.id, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: string;
}
