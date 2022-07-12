import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Collection } from './collection.entity';
@Entity('collections_assets', { schema: 'public' })
export class CollectionAsset {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('boolean', {
    name: 'owner_curator_agreement',
    nullable: false,
    default: false,
  })
  ownerCuratorAgreement: boolean;

  @Column('boolean', {
    name: 'ip_agreement',
    nullable: false,
    default: false,
  })
  ipAgreement: boolean;

  @Column('boolean', {
    name: 'term_agreement',
    nullable: false,
    default: false,
  })
  termAgreement: boolean;

  @Column('uuid', { name: 'asset_id', nullable: false })
  assetId: string;

  @ManyToOne((type) => Collection, (collection) => collection.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'collection_id' })
  collectionId: Collection | string;

  @Column('bigint', { name: 'role_id' })
  roleId: number;

  @Column('uuid', { name: 'added_by', nullable: false })
  addedBy: string; // User ID

  @Column('uuid', { name: 'last_updated_by' })
  lastUpdatedBy: string; // User ID

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn()
  deletedAt?: Date;
}
