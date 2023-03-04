import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from '../users/dto/login.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.usersService.createUser(createUserDto);
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async login(LoginUserDto: LoginUserDto) {
    const user = await this.validateUser(LoginUserDto);
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(LoginUserDto: LoginUserDto) {
    const { email, password } = LoginUserDto;
    const user = await this.usersService.findByEmail({ email });
    if (!(await this.usersService.validatePW(password, user.password))) {
      throw new HttpException('no_user', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
