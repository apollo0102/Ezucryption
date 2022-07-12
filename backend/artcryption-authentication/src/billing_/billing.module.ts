import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { BillingEntity } from './billing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillingEntity]), UsersModule],
})
export class BillingModule {}
