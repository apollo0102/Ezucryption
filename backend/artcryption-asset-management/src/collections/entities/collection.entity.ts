import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('collections', { schema: 'public' })
export class Collection {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: false, length: 255 })
  name: string;

  @Column('varchar', { name: 'short_description', length: 255 })
  shortDescription: string;

  @Column('text', { name: 'description', nullable: true })
  description: string;

  @Column('boolean', { name: 'private', nullable: false, default: false })
  private: boolean;

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
