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
import { LinksService } from './links.service';
import { LinksParamsDto } from './dto/links-params.dto';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { LinksSerializerDto } from './dto/links-serializer.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Serialize(LinksSerializerDto)
@ApiTags('User Links')
@ApiBearerAuth()
@ApiResponse({
  status: 401,
  description: '"Unauthorized", if JWT Token is missing in headers',
})
@UseGuards(JwtAuthGuard)
@Controller('users/:userId/links')
export class LinksController {
  constructor(private readonly LinksService: LinksService) {}

  @ApiResponse({
    status: 200,
    description: 'Getting all Links of User',
  })
  @Get()
  async findAll(@Request() req, @Param('userId') userId: string) {
    await this.LinksService.checkUser(req.user.id, userId);
    return this.LinksService.findAll(req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Getting single Links of User',
  })
  @Get(':id')
  async findOne(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.LinksService.checkUser(req.user.id, userId);
    return this.LinksService.findOne(+id, req.user.id);
  }

  @ApiResponse({
    status: 201,
    description: 'Creating Links of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Link already exist',
  })
  @Post()
  async create(
    @Request() req,
    @Param('userId') userId: string,
    @Body() params: LinksParamsDto,
  ) {
    await this.LinksService.checkUser(req.user.id, userId);
    return this.LinksService.create(params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Updating Links of User',
  })
  @ApiResponse({
    status: 400,
    description: 'Link already exist',
  })
  @Patch(':id')
  async update(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() params: LinksParamsDto,
  ) {
    await this.LinksService.checkUser(req.user.id, userId);
    return this.LinksService.update(+id, params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Deleting Links of User',
  })
  @Delete(':id')
  async remove(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    await this.LinksService.checkUser(req.user.id, userId);
    return this.LinksService.remove(+id, req.user.id);
  }
}
