import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty() name: string;

    @IsNotEmpty()
    @ApiProperty() email: string;

    @ApiProperty()
    @IsNotEmpty() password: string;
}