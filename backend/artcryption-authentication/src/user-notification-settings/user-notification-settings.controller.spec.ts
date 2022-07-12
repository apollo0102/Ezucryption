import { Test, TestingModule } from '@nestjs/testing';
import { UserNotificationSettingsController } from './user-notification-settings.controller';
import { UserNotificationSettingsService } from './user-notification-settings.service';

describe('UserNotificationSettingsController', () => {
  let controller: UserNotificationSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserNotificationSettingsController],
      providers: [UserNotificationSettingsService],
    }).compile();

    controller = module.get<UserNotificationSettingsController>(UserNotificationSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
