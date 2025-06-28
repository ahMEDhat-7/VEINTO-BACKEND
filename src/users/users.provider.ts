import { Injectable } from '@nestjs/common';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersProvider {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

  findByName(username: string) {
    return this.userModel.findOne({ $where: username });
  }


}
