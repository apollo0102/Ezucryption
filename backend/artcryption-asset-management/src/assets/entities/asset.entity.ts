import { Collection } from 'src/collections/entities/collection.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AssetType } from './asset_types.entity';

@Entity('assets', { schema: 'public' })
export class Asset {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string;

  @Column('varchar', { name: 'external_link', length: 255, nullable: false })
  externalLink: string;

  @Column('varchar', { name: 'title_of_work', length: 255, nullable: true })
  titleOfWork: string;

  @Column('varchar', { name: 'traits', length: 255, nullable: true })
  traits: string;

  @Column('varchar', {
    name: 'place_of_publication',
    length: 255,
    nullable: true,
  })
  placeOfPblication: string;

  @Column('varchar', { name: 'publication_date', length: 25, nullable: true })
  publicationDate: string;

  @Column('varchar', { name: 'dimensions', length: 255, nullable: true })
  dimensions: string;

  @Column('varchar', { name: 'materials', length: 255, nullable: true })
  materials: string;

  @Column('varchar', { name: 'edition_number', length: 255, nullable: true })
  editionNumber: string;

  @Column('varchar', {
    name: 'number_of_editions',
    length: 255,
    nullable: true,
  })
  numberOfEditions: string;

  @Column('varchar', { name: 'token_address', length: 255, nullable: true })
  tokenAddress: string;

  @Column('uuid', { name: 'approved_status_id', nullable: true })
  approvedStatusId: string;

  @Column('boolean', { name: 'is_added_to_feed', nullable: true })
  isAddedToFeed: boolean;

  @Column('boolean', { name: 'is_blockchain_enabled', nullable: true })
  isBlockchainEnabled: boolean;

  @Column('boolean', { name: 'is_minted', nullable: true })
  isMinted: boolean;

  @Column('boolean', { name: 'is_private', nullable: true })
  isPrivate: boolean;

  @Column('boolean', { name: 'is_monitored', nullable: true })
  isMonitored: boolean;

  @Column('date', { name: 'monitor_start_date', nullable: true })
  monitorStartDate: boolean;

  @Column('uuid', { name: 'owner_id', nullable: false })
  ownerId: string;

  @ManyToOne((type) => AssetType, (assetType) => assetType.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'asset_type_id' })
  assetTypeId: AssetType | number;

  @ManyToOne(() => Collection, (collection) => collection.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'collection_id' })
  collectionId: Collection | string;

  @Column('text', { name: 'description', nullable: true })
  description: string;

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
