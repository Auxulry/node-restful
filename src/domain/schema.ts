import { ApiProperty } from '@nestjs/swagger';

export class Responser {
  @ApiProperty()
  code: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  message: string;
}