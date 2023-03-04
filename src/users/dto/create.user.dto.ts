import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty() name: string;

    @IsNotEmpty()
    @ApiProperty() email: string;

    @ApiProperty()
    @IsNotEmpty() password: string;

    @ApiProperty()
    @IsNotEmpty() role: Role;
    
}