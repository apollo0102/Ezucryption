import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { BillingEntity } from './entities/bill.entity';


@ApiBearerAuth()
@ApiTags('User Bill')
@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @ApiOperation({ summary: 'Create a Bill' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @ApiOperation({ summary: 'Get a Billing List By UserId' })
  @ApiResponse({
    status: 200,
    description: 'Get User Billing List',
    type: BillingEntity,
  })
  @Get(':userId')
  async findAllByUserId(@Param('userId') userId:string) {
    return this.billService.findAllByUserId(userId);
  }

  @ApiOperation({ summary: 'Get a Bill By Id' })
  @ApiResponse({
    status: 200,
    description: 'Get One Billing By Id',
    type: BillingEntity,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log("id------------------------------->", id);
    return this.billService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a Bill By Id' })
  @ApiResponse({
    status: 200,
    description: 'Update User Bill',
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(id, updateBillDto);
  }

  @ApiOperation({ summary: 'Delete a Bill By Id' })
  @ApiResponse({
    status: 200,
    description: 'Delete User Bill',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.billService.remove(id);
  }
}