import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { LoginUserDto } from 'src/users/dto/login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }

  
  @Post('register')
  register(@Body() userDto: CreateUserDto) {
    try {
      const user = this.authService.register(userDto);
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
