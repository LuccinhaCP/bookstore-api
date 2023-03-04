import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userDto: CreateUserDto): Promise<any> {
    return await this.prisma.user.create({
      data: {
        ...userDto,
        password: await hash(userDto.password, 10),
      },
    });
  }

  async findByEmail({ email }) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    return user;
  }
  
  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findByPayload({ email }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
  
  async validatePW(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
