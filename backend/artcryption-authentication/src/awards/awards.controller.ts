import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsParamsDto } from './dto/awards-params.dto';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { AwardsSerializerDto } from './dto/awards-serializer.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Serialize(AwardsSerializerDto)
@ApiBearerAuth()
@ApiTags('User Awards')
@UseGuards(JwtAuthGuard)
@Controller('users/:userId/awards')
export class AwardsController {
  constructor(private readonly AwardsService: AwardsService) {}

  @ApiResponse({
    status: 200,
    description: 'Getting all Awards of User',
  })
  @Get()
  async findAll(@Request() req, @Param('userId') userId: string) {
    await this.AwardsService.checkUser(req.user.id, userId);
    return this.AwardsService.findAll(req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Getting single Awards of User',
  })
  @Get(':id')
  async findOne(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.AwardsService.checkUser(req.user.id, userId);
    return this.AwardsService.findOne(+id, req.user.id);
  }

  @ApiResponse({
    status: 201,
    description: 'Creating Awards of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Award already exist',
  })
  @Post()
  async create(
    @Request() req,
    @Param('userId') userId: string,
    @Body() params: AwardsParamsDto,
  ) {
    await this.AwardsService.checkUser(req.user.id, userId);
    return this.AwardsService.create(params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Updating Awards of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Award already exist',
  })
  @Patch(':id')
  async update(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() params: AwardsParamsDto,
  ) {
    await this.AwardsService.checkUser(req.user.id, userId);
    return this.AwardsService.update(+id, params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Deleting Awards of User',
  })
  @Delete(':id')
  async remove(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.AwardsService.checkUser(req.user.id, userId);
    return this.AwardsService.remove(+id, req.user.id);
  }
}
