import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNotificationSettingsService } from './user-notification-settings.service';
import { UserNotificationSettingsController } from './user-notification-settings.controller';
import { UserNotificationSettings } from './entities/user-notification-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserNotificationSettings])],
  controllers: [UserNotificationSettingsController],
  providers: [UserNotificationSettingsService],
})
export class UserNotificationSettingsModule {}
