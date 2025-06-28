import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersProvider } from 'src/users/users.provider';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly usersProvider: UsersProvider) { }
  public login(loginUserDto: LoginUserDto) {
    this.usersProvider.findByName(loginUserDto.username)
    return "Logged In";
  }

  public register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
