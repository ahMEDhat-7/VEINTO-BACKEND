import { IsString, IsEmail, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString() username: string;
  @IsEmail() email: string;
  @IsString() password: string;

  @IsIn(['user', 'admin'])
  role?: 'user' | 'admin';
}
