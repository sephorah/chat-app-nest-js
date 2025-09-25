import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  username?: string;

  // @IsString()
  // email?: string;

  // @IsStrongPassword({
  //   minLength: 8,
  // })
  // password?: string;
}
