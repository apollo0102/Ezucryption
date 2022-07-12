import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { BillingEntity } from './entities/bill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillingEntity]), UsersModule],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}
