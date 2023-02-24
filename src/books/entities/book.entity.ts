import { ApiProperty } from '@nestjs/swagger';
import { Book } from '@prisma/client'


export class BookEntity implements Book {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  publishedDate: Date;
}
