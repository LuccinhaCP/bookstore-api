import { Module } from '@nestjs/common';
import {UsersService} from "./users.service";
import {PrismaService} from "../prisma/prisma.service";
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [],
    exports: [UsersService],
    controllers: [UsersController],
    providers: [UsersService, PrismaService]
})
export class UsersModule {}
