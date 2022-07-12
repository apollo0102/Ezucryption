import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { EventsEntity } from './event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventsEntity]), UsersModule],
})
export class BillingModule {}
