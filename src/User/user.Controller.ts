import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/getAll')
  getAllUsers(): string {
    return this.userService.getAllUsers();
  }

  @Get('user/get/:id')
  getUser(@Param('id') id: string): string {
    return this.userService.getUser(id);
  }

  @Get('user/getByName')
  getUsers(@Query('name') name: string): string {
    return this.userService.getUsersByName(name);
  }

  @Post('user/create')
  createUser(@Body() data: any): string {
    return this.userService.createUser(data);
  }

  @Put('user/:id')
  updateUser(@Param('id') id: string, @Body() data: any): string {
    return this.userService.updateUser(id, data);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: string): string {
    return this.userService.deleteUser(id);
  }
}