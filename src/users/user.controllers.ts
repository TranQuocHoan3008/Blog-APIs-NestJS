import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { UserServices } from './user.services';

@Controller('users')
export class UserController {
  constructor(private userServices: UserServices) {}

  @Get()
  async getAllUsers() {
    console.log('here');
    const result = await this.userServices.allPost();
    console.log(result);
    return result;
  }

  @Post()
  createUser() {
    return {
      username: 'Tran Quoc Hoan',
      password: `Hoan has create this user`,
    };
  }

  @Get(':id')
  getUserById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    console.log(id);
    return {
      username: 'Tran Quoc Hoan',
      password: `Hoan has create this user`,
    };
  }

  @Get('?:id')
  getUserByQueryID(@Query('id') id: number) {
    console.log(id);
    return {
      username: 'Tran Quoc Hoan',
      password: `Hoan has create this user`,
    };
  }
}
