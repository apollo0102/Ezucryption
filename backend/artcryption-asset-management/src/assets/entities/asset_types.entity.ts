import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
} from 'typeorm';

@Entity('asset_types', { schema: 'public' })
export class AssetType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', nullable: false, length: 255 })
  name: string;

  @Column('boolean', { name: 'default', nullable: false, default: false })
  default: boolean;

  @Column('uuid', { name: 'created_by', nullable: false })
  createdBy: string; // User ID

  @Column('uuid', { name: 'updated_by', nullable: true })
  updatedBy: string; // User ID

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn()
  deletedAt?: Date;
}
