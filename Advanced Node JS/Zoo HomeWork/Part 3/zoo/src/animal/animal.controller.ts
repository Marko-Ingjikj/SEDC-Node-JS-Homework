import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { AnimalService } from './animal.service';
import { query } from 'express';
import { AnimalQueryDto } from './dtos/animal-query.dto';

@ApiTags('Animals')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Animals in zoo',
  })
  getAnimals(@Query() query: AnimalQueryDto): Promise<AnimalResponseDto[]> {
    return this.animalService.getAnimals(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Created animal',
  })
  createAnimal(@Body() newAnimal: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalService.createAnimal(newAnimal);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Edited Animal',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Cannot find Animal',
  })
  updateAnimal(
    @Param('id') id: string,
    @Body() updateData: AnimalUpdateDto,
  ): Promise<AnimalResponseDto> {
    return this.animalService.updateAnimal(id, updateData);
  }
}
