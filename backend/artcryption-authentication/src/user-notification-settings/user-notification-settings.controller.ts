import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserNotificationSettingsService } from './user-notification-settings.service';
import { UpdateUserNotificationSettingDto } from './dto/update-user-notification-setting.dto';

@ApiBearerAuth()
@ApiTags('User Notification Settings')
@Controller('users/:userId/notifications/settings')
export class UserNotificationSettingsController {
  constructor(
    private readonly userNotificationSettingsService: UserNotificationSettingsService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UpdateUserNotificationSettingDto,
  })
  findOne(@Param('userId') userId: string) {
    return this.userNotificationSettingsService.findOne(userId);
  }

  @Patch()
  @ApiOperation({ summary: 'Update User Notification Settings' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(
    @Param('userId') userId: string,
    @Body() body: UpdateUserNotificationSettingDto,
  ) {
    return this.userNotificationSettingsService.update(userId, body);
  }
}
