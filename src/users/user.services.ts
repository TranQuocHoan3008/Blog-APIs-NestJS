import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Schemas/user.schema';

@Injectable({})
export class UserServices {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async allPost(): Promise<User[]> {
    return await this.userModel.find();
  }
}
