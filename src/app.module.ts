import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './users/roles/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PrismaModule, BooksModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {}
