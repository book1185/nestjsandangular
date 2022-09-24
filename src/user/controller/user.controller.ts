import { UserService } from './../service/user.service';
import { User } from './../models/user.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}
  @Post()
  create(@Body() user: User): Observable<User> {
    return this.UserService.create(user);
  }
  @Get(':id')
  findOne(@Param() params): Observable<User> {
    return this.UserService.findOne(params.id);
  }
  @Get()
  findAll(): Observable<User[]> {
    return this.UserService.findAll();
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<User> {
    return this.UserService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.UserService.updateOne(Number(id), user);
  }
}
