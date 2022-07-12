import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
  Patch,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import {
  UserParamsDto,
  UserPasswordParamsDto,
  UserInvitationParamsDto,
  GetAllUsersDto,
} from './dto/user-params.dto';
import {
  UserBasicSerializerDto,
  UserDetailedSerializerDto,
} from './dto/user-serializer.dto';
import { UsersService } from './users.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Serialize(UserBasicSerializerDto)
@ApiTags('User')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(public usersService: UsersService) {}

  @ApiResponse({
    status: 200,
    description: 'Getting single User',
  })
  @Serialize(UserDetailedSerializerDto)
  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    await this.usersService.checkUser(req.user.id, id);
    return this.usersService.findOne(id);
  }

  // Inviting user to the platform
  @ApiResponse({
    status: 201,
    description: 'Inviting User to the platform',
  })
  @ApiResponse({
    status: 400,
    description: 'User already exist',
  })
  @Post('invite')
  async create(@Request() req, @Body() params: UserInvitationParamsDto) {
    return this.usersService.invite(params, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Updating User',
  })
  @Serialize(UserDetailedSerializerDto)
  @Patch(':id/update')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() params: UserParamsDto,
  ) {
    await this.usersService.checkUser(req.user.id, id);
    return this.usersService.update(id, params);
  }

  // Changing Password of the User
  @ApiResponse({
    status: 200,
    description: 'Updating User',
  })
  @Patch(':id/change-password')
  async changePassword(
    @Request() req,
    @Param('id') id: string,
    @Body() params: UserPasswordParamsDto,
  ) {
    await this.usersService.checkUser(req.user.id, id);
    return this.usersService.changePassword(id, params);
  }

  @ApiResponse({
    status: 200,
    description: 'Get All Users - Admin',
  })
  @Post('/get/all')
  async getAllUsers(@Request() req, @Body() params: GetAllUsersDto) {
    return this.usersService.getAllUsers(params, req.user.id);
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post('upload/display/picture')
  @UseGuards(JwtAuthGuard)
  async uploadFile(@UploadedFile() file, @Req() req: any): Promise<any> {
    // const user = await this.usersService.findOne(req.user.id);

    return 'OK';
  }

  /*
    Api to send 2fa code to email or mobile phone
  */

  @Post('users/send/code')
  @UseGuards(JwtAuthGuard)
  async sendCode(@UploadedFile() file, @Req() req: any): Promise<any> {
    const user = await this.usersService.findOne(req.user.id);

    return 'OK';
  }
}
