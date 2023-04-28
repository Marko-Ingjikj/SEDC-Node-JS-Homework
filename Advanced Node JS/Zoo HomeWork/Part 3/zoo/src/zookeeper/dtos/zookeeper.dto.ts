import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Zookeeper } from '../interfaces/zookeeper';

export class ZookeeperCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Name of zookeeper',
    example: 'Marko',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(18)
  @ApiProperty({
    type: Number,
    description: 'Age of zookeeper',
    example: 19,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Location of zookeeper',
    example: 'Skopje',
  })
  location: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
    description: 'Is the zookeeper active or not',
    example: true,
  })
  isActive: boolean;
}

export class ZookeeperResponseDto
  extends ZookeeperCreateDto
  implements Zookeeper
{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Id of zookeeper',
    example: 'gs78gfs8sadfj802',
  })
  id: string;
}

export class ZookeeperUpdateDto extends ZookeeperCreateDto {}
