import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { CreateUserDto } from './dto/create.user.dto';
import { Roles } from './roles/roles.decorator';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  @Post()
  @Roles(Role.MASTER)
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get()
  async index(id) {
    return this.usersService.getAllUsers();
  }
}
