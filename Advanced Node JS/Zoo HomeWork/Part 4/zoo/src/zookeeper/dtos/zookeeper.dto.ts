import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Zookeeper } from '../interfaces/zookeeper.interface';

export class ZookeeperCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Name of zookeeper',
    example: 'Marko Ingjikj',
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
    example: 'Kumanovo',
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

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: 'Date and time when zookeeper was created',
    example: '19.05.2023',
  })
  createdAt!: Date;
  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: 'Date and time when zookeeper was created',
    example: '19.05.2023',
  })
  updatedAt!: Date;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: 'Date and time when zookeeper was deleted',
    example: '19.05.2023',
  })
  deletedAt?: Date;
}

export class ZookeeperUpdateDto extends ZookeeperCreateDto {}
