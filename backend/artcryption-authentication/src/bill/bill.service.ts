import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import {BillingEntity} from './entities/bill.entity';
@Injectable()
export class BillService {
  constructor(
    @InjectRepository(BillingEntity)
    private billRepository: Repository<BillingEntity>
  ){}


  async findAllByUserId(userId: string){
    return this.billRepository.find({ user_id : userId });
  }

  async create(createBillDto: CreateBillDto) {
    console.log("createdBillDto--->", createBillDto)
    const newBill = new BillingEntity();
    newBill.asset_id = createBillDto.asset_id;
    newBill.price = createBillDto.price;
    newBill.transaction_id = createBillDto.transaction_id;
    newBill.user_id = createBillDto.user_id;
    const bill = await this.billRepository.save(newBill);

    // const bill = await this.billRepository.create(
    //   createBillDto
    // );
    console.log("bill", bill);
    return bill;
  }

  async findOne(id: string) {
    const role = await this.billRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`Role with UUID: ${id} not found.`);
    }
    return role;
  }

  async update(id: string, updateBillDto: UpdateBillDto) {
    const bill = await this.findOne(id);
    Object.assign(bill, updateBillDto);
    await this.billRepository.save(bill);

    return bill;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.billRepository.delete({ id });
  }
}
