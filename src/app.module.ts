import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from 'configuration/db';

@Module({
  imports: [UserModule, MongooseModule.forRoot(MONGODB_URI)],
})
export class AppModule {}
