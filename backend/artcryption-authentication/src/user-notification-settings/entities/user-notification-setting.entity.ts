import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { User } from 'src/users/users.entity';

@Entity('user_notification_settings', { schema: 'public' })
export class UserNotificationSettings {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('boolean', { name: 'items_sold', default: false })
  itemsSold = false;

  @Column('boolean', { name: 'bid_activity', default: false })
  bidActivity = false;

  @Column('boolean', { name: 'price_change', default: false })
  priceChange = false;

  @Column('boolean', { name: 'auction_expiration', default: false })
  auctionExpiration = false;

  @Column('boolean', { name: 'out_bid', default: false })
  outBid = false;

  @Column('boolean', { name: 'owned_items_updates', default: false })
  ownedOItemsUpdates = false;

  @Column('boolean', { name: 'successful_purchase', default: false })
  successfulPurchase = false;

  @Column('boolean', { name: 'news_letter', default: false })
  newsLetter = false;

  @Column('boolean', { name: 'referral_successful', default: false })
  referralSuccessful = false;

  @Column('boolean', { name: 'funds_added_or_removed', default: false })
  fundsAddedORRemoved = false;

  @Column('boolean', { name: 'drop_reminder', default: false })
  dropReminder = false;

  @Column('boolean', { name: 'event_reminder', default: false })
  eventReminder = false;

  @Column('boolean', { name: 'followers_following', default: false })
  followersfollowing = false;

  @Column('boolean', { name: 'digital_identity_verification', default: false })
  digitalIdentifyVerification = false;

  @Column('boolean', { name: 'assetLiked', default: false })
  assetLiked = false;

  @Column({
    type: 'int4',
    name: 'notification_type_id',
    default: null,
    nullable: true,
  })
  notificationTypeId: number | null;

  @OneToOne((type) => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  userId: User | string;
}
