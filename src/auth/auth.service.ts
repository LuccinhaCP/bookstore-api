import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { LoginUserDto } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.usersService.create(createUserDto);
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async validateUser(payload: JwtPayload) {
    throw new Error('Method not implemented.');
  }
  
  async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.findLogin(loginUserDto);

    const token = this._createToken(user);
    return {
      ...token,
      data: user,
    };
  }
  private _createToken({ email }): any {
    const user: JwtPayload = { email };
    const auth = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      auth,
    };
  }
}
