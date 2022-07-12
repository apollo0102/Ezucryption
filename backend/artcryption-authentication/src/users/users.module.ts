import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UserNotificationSettings } from '../user-notification-settings/entities/user-notification-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserNotificationSettings])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
