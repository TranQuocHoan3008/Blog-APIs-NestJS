import { Module } from '@nestjs/common';
import { UserController } from './user.controllers';
import { UserServices } from './user.services';
@Module({
  controllers: [UserController],
  providers: [UserServices],
})
export class UserModule {}
