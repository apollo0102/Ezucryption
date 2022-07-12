import { PartialType } from '@nestjs/swagger';
import { CreateBillDto } from './create-bill.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateBillDto extends PartialType(CreateBillDto) {
  
  @ApiProperty()
  @IsNotEmpty({ message: 'No assetId provided' })
  @IsString()
  asset_id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'No transactionId provided' })
  @IsString()
  transaction_id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'No price provided' })
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'No userId provided' })
  @IsString()
   user_id: string;
}
