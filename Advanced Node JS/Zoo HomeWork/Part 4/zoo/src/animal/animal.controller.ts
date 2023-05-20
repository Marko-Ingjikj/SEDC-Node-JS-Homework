import { Roles } from './../auth/decorators/get-user.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { AnimalService } from './animal.service';
import { AnimalQueryDto } from './dtos/animal-query.dto';
import { RolesEnum } from 'src/auth/roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Animals')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  getAnimals(@Query() query: AnimalQueryDto): Promise<AnimalResponseDto[]> {
    return this.animalService.getAnimals(query);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post()
  createAnimal(@Body() body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalService.createAnimal(body);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateAnimal(
    @Param('id') id: string,
    @Body() body: AnimalCreateDto,
  ): Promise<AnimalResponseDto> {
    return this.animalService.updateAnimal(id, body);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAnimal(@Param('id') id: string) {
    return this.animalService.deleteAnimal(id);
  }
}
