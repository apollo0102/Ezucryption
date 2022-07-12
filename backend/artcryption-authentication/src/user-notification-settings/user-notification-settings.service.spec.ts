import { Test, TestingModule } from '@nestjs/testing';
import { UserNotificationSettingsService } from './user-notification-settings.service';

describe('UserNotificationSettingsService', () => {
  let service: UserNotificationSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserNotificationSettingsService],
    }).compile();

    service = module.get<UserNotificationSettingsService>(
      UserNotificationSettingsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
