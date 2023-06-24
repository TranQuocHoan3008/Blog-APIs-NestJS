import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'Hoan',
        age: 18,
      },
      {
        name: 'Hien',
        age: 16,
      },
      {
        name: 'Kim',
        age: 12,
      },
    ];
  }

  @Post()
  createUser(@Body() user: UserDTO): UserDTO {
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
  ): UserDTO {
    console.log(id);
    return {
      username: 'Tran Quoc Hoan',
      password: `Hoan has create this user`,
    };
  }

  @Get('?:id')
  getUserByQueryID(@Query('id') id: number): UserDTO {
    console.log(id);
    return {
      username: 'Tran Quoc Hoan',
      password: `Hoan has create this user`,
    };
  }
}
