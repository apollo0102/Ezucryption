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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { FollowerLikeParamDto } from './dto/follower-like-param.dto';
import { UserFollowerLikeSerializerDto } from './dto/user-follower-like-serializer.dto';
import { UsersFollowersService } from './users-followers/users-followers.service';
import { UsersLikesService } from './users-likes/users-likes.service';

// We are using Polymorphic association to capture likes, followers of User, Asset COLLECTIONS in a single API
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('followers-likes')
@ApiResponse({
  status: 401,
  description: '"Unauthorized", if JWT Token is missing in headers',
})
class FollowersLikesController {
  constructor(public service: any) {}

  @ApiResponse({
    status: 200,
    description: 'Getting all Followers/Likes of Users - Depends on Route',
  })
  @Get()
  findAll(@Request() req, @Param('userId') userId: string) {
    return this.service.findAll(req.user, userId);
  }

  @ApiResponse({
    status: 201,
    description: 'Follow OR Like Users',
  })
  @Post()
  create(
    @Request() req,
    @Body() params: FollowerLikeParamDto,
    @Param('userId') userId: string,
  ) {
    return this.service.create(req.user, params);
  }

  @ApiResponse({
    status: 200,
    description: 'Unfollow or Unlike Users',
  })
  @Delete(':id')
  remove(
    @Request() req,
    @Param('id') id: string,
    @Param('userId') userId: string,
  ) {
    return this.service.remove(req.user, +id);
  }
}

@Serialize(UserFollowerLikeSerializerDto)
@ApiTags('User')
@Controller('users/:userId/follow')
export class UserFollowerController extends FollowersLikesController {
  constructor(service: UsersFollowersService) {
    super(service);
  }
}

@Serialize(UserFollowerLikeSerializerDto)
@ApiTags('User')
@Controller('users/:userId/like')
export class UserLikeController extends FollowersLikesController {
  constructor(service: UsersLikesService) {
    super(service);
  }
}
