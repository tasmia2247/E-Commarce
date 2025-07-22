import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return 'All users returned from service';
  }

  getUser(id: string): string {
    return `User with ID ${id} returned from service`;
  }

  getUsersByName(name: string): string {
    return `Name: ${name} returned from service`;
  }

  createUser(data: any): string {
    return `User created with name: ${data.name}, username: ${data.username}`;
  }

  updateUser(id: string, data: any): string {
    return `User with ID ${id} updated with data: ${JSON.stringify(data)}`;
  }

  deleteUser(id: string): string {
    return `User with ID ${id} deleted`;
  }
}
