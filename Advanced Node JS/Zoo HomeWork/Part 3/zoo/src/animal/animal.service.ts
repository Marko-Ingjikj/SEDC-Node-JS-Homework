import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './interfaces/animal';
import { PinoLogger } from 'nestjs-pino';
import { Model } from 'mongoose';
import {
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { AnimalQueryDto } from './dtos/animal-query.dto';

@Injectable()
export class AnimalService {
  constructor(
    @Inject('ANIMAL_MODEL') private animalModel: Model<Animal>,
    private readonly logger: PinoLogger,
  ) {}

  getAnimals(query: AnimalQueryDto): Promise<AnimalResponseDto[]> {
    this.logger.info('getAnimals called');

    return this.animalModel.find({
      location: { $regex: query?.location ?? '', $options: 'i' },
      gender: { $regex: query?.gender ?? '', $options: 'i' },
    });
  }

  getAnimalById(id: string): Promise<AnimalResponseDto> {
    return this.animalModel.findById(id);
  }

  createAnimal(newAnimal: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalModel.create(newAnimal);
  }

  async updateAnimal(
    id: string,
    updateData: AnimalUpdateDto,
  ): Promise<AnimalResponseDto> {
    const animal = await this.getAnimalById(id);

    if (!animal) {
      this.logger.error(`Animal with id: ${id} not found`);
      throw new NotFoundException(`Animal with id: ${id} not found`);
    }

    return this.animalModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }
}
