import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { UserExhibitionsService } from './user-exhibitions.service';
import { CreateUserExhibitionDto } from './dto/create-user-exhibition.dto';
import { UpdateUserExhibitionDto } from './dto/update-user-exhibition.dto';

@ApiBearerAuth()
@ApiTags('User Exhibitions')
@Controller('users/:userId/exhibitions')
export class UserExhibitionsController {
  constructor(
    private readonly userExhibitionsService: UserExhibitionsService,
  ) {}

  @ApiOperation({ summary: 'Add User exhibition' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() createUserExhibitionDto: CreateUserExhibitionDto) {
    return this.userExhibitionsService.create(createUserExhibitionDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get All User Exhibitions',
    type: CreateUserExhibitionDto,
  })
  @Get()
  async findAll(@Param('userId') userId: string) {
    const exhibitions = await this.userExhibitionsService.findAll(userId);
    return { exhibitions };
  }

  @ApiResponse({
    status: 200,
    description: 'Get One User Exhibition',
    type: CreateUserExhibitionDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExhibitionsService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update User Exhibition',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserExhibitionDto: UpdateUserExhibitionDto,
  ) {
    return this.userExhibitionsService.update(id, updateUserExhibitionDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete User Exhibition',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExhibitionsService.remove(id);
  }
}
