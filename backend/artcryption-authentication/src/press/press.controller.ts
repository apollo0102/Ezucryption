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
} from '@nestjs/common';
import { PressService } from './press.service';
import { PressParamsDto } from './dto/press-params.dto';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { PressSerializerDto } from './dto/press-serializer.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Serialize(PressSerializerDto)
@ApiTags('Add User Press Articles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users/:userId/press')
export class PressController {
  constructor(private readonly pressService: PressService) {}

  @ApiResponse({
    status: 200,
    description: 'Getting all Press of User',
  })
  @Get()
  async findAll(@Request() req, @Param('userId') userId: string) {
    await this.pressService.checkUser(req.user.id, userId);
    return this.pressService.findAll(req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Getting single Press of User',
  })
  @Get(':id')
  async findOne(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.pressService.checkUser(req.user.id, userId);
    return this.pressService.findOne(+id, req.user.id);
  }

  @ApiResponse({
    status: 201,
    description: 'Creating Press of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Press already exist',
  })
  @Post()
  async create(
    @Request() req,
    @Param('userId') userId: string,
    @Body() params: PressParamsDto,
  ) {
    await this.pressService.checkUser(req.user.id, userId);
    return this.pressService.create(params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Updating Press of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Press already exist',
  })
  @Patch(':id')
  async update(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() params: PressParamsDto,
  ) {
    await this.pressService.checkUser(req.user.id, userId);
    return this.pressService.update(+id, params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Deleting Press of User',
  })
  @Delete(':id')
  async remove(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.pressService.checkUser(req.user.id, userId);
    return this.pressService.remove(+id, req.user.id);
  }
}
