import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Animal } from '../interfaces/animal';

export class AnimalCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Name of animal',
    example: 'Zeki',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Age of animal',
    example: 2,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Location of animal',
    example: 'Skopje',
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Gender of animal',
    example: 'Male',
  })
  gender: string;

  @IsObject()
  @IsNotEmpty()
  characteristics: {
    food: [string];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
  };
}

export class AnimalResponseDto extends AnimalCreateDto implements Animal {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Id of animal',
    example: 'gs78gfs8sadfj802',
  })
  id: string;
}

export class AnimalUpdateDto extends AnimalCreateDto {}
