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
@Entity('events', { schema: 'public' })
export class EventsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'event_id' })
  id: string;

  @Column('uuid', { name: 'event_type_id', default: null })
  eventTypeId: string | null;

  @Column('uuid', { name: 'waitlist_id', default: null })
  waitListId: string | null;

  @Column('uuid', { name: 'notification_id', default: null })
  notificationId: string | null;

  @Column('uuid', { name: 'event_image_id', default: null })
  eventImageId: string | null;

  @Column('uuid', { name: 'collection_id', default: null })
  collectionId: string | null;

  @Column({ name: 'event_url', default: null })
  url: string | null;

  @Column('text', { name: 'event_description', default: null })
  description: string | null;

  @Column({
    type: 'timestamp with time zone',
    name: 'event_start_date',
    default: null,
  })
  event_start_date: string | null;

  @Column({
    type: 'timestamp with time zone',
    name: 'event_end_date',
    default: null,
  })
  event_end_date: string | null;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;
}
