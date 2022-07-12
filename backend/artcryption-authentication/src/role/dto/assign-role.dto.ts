import { ParseIntPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNumber, IsString } from 'class-validator';

export class AssignRoleDto {
  @ApiProperty({ default: 'role' })
  @IsString()
  role: string;
}
