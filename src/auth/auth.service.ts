import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersProvider } from 'src/users/users.provider';
import { User } from 'src/users/entities/user.schema';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly usersProvider: UsersProvider) { }
  public login(loginUserDto: LoginUserDto) {
    this.usersProvider.findByName(loginUserDto.username)
    return "Logged In";
  }

  public async register(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // check if user exists 
    const user = await this.usersProvider.findByName(createUserDto.username);
    if (!user) throw new BadRequestException("username already exists, try again...");
    // create user
    return this.usersService.create(createUserDto);
  }
}
