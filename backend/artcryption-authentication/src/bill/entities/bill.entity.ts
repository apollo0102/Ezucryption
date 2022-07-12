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
  // @PrimaryGeneratedColumn('uuid', { name: 'id' })
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', nullable: true })
  asset_id: string | null;

  @Column({ type: 'varchar', nullable: true })
  transaction_id: string | null;

  @Column({ name: 'price', default: null })
  price: number | null;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  // This column states that who created this ROLE
  @ManyToOne((type) => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user_id: string;
}
