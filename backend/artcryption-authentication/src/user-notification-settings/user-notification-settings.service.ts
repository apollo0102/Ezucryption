import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserNotificationSettings } from './entities/user-notification-setting.entity';
import { UpdateUserNotificationSettingDto } from './dto/update-user-notification-setting.dto';

@Injectable()
export class UserNotificationSettingsService {
  constructor(
    @InjectRepository(UserNotificationSettings)
    private userNotificationRepository: Repository<UserNotificationSettings>,
  ) {}

  findOne(userId: string) {
    return this.userNotificationRepository.findOne({ where: { userId } });
  }

  async update(userId: string, params: UpdateUserNotificationSettingDto) {
    const setting = await this.userNotificationRepository.findOne({ userId });
    if (!setting)
      throw new NotFoundException('Notification settings not found');

    Object.assign(setting, params);
    const userNotificationSetting = await this.userNotificationRepository.save(
      setting,
    );
    return userNotificationSetting;
  }
}
