import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  publisher: string;

 
  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  publishedDate: Date;
}
