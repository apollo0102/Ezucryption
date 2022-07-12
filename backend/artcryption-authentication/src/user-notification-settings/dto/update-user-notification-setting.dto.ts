import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';
import { IsBoolean, IsEmpty } from 'class-validator';

export class UpdateUserNotificationSettingDto {
  @ApiProperty()
  @Expose()
  @IsBoolean()
  itemsSold: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  bidActivity: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  priceChange: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  auctionExpiration: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  outBid: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  ownedOItemsUpdates: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  successfulPurchase: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  newsLetter: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  referralSuccessful: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  fundsAddedORRemoved: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  dropReminder: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  eventReminder: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  followersfollowing: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  digitalIdentifyVerification: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  assetLiked: boolean;

  @ApiProperty()
  @Expose()
  @IsEmpty()
  notificationTypeId: number;
}
