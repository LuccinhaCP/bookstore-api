import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(userDto: CreateUserDto): Promise<any> {
    return await this.prisma.user.create({
      data: {
        ...userDto,
        password: await hash(userDto.password, 10),
      },
    });
  }

  async findLogin({ email, password }: LoginUserDto): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new HttpException('no_user', HttpStatus.UNAUTHORIZED);
    }
    const isPWvalid = await compare(password, user.password);

    if (!isPWvalid) {
      throw new HttpException('login_error', HttpStatus.UNAUTHORIZED);
    }

    const { password: p, ...data } = user;
    return data;
  }
}
