import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AnimalQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'Skopje',
  })
  location?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 2,
    default: 2,
  })
  age?: number = 2;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'M',
  })
  gender?: string;
}
