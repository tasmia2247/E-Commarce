import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): string {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): string {
    return this.userService.getUser(id);
  }
/*
  @Get()
  getUsers(@Query('name') name: string): string {
    return this.userService.getUsersByName(name);
  }
*/

  @Post()
  createUser(@Body() data: any): string {
    return this.userService.createUser(data);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: any): string {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.userService.deleteUser(id);
  }
}
