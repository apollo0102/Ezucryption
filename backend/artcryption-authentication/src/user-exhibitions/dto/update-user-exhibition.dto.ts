import { PartialType } from '@nestjs/swagger';
import { CreateUserExhibitionDto } from './create-user-exhibition.dto';

export class UpdateUserExhibitionDto extends PartialType(
  CreateUserExhibitionDto,
) {}
