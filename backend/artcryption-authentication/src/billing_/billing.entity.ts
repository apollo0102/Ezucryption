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
@Entity('billing', { schema: 'public' })
export class BillingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  asset_id: string | null;
  
  @Column({ default: null })
  transaction_id: string | null;

  @Column({ default: null })
  price: string | null;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  // This column states that who created this ROLE
  @ManyToOne((type) => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  userId: string;
}