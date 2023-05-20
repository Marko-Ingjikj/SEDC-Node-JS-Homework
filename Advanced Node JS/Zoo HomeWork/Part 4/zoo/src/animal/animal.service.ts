import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Animal } from './animal.entity';
import { AnimalQueryDto } from './dtos/animal-query.dto';
import { AnimalCreateDto, AnimalResponseDto } from './dtos/animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  getAnimals(query: AnimalQueryDto): Promise<AnimalResponseDto[]> {
    const ageQuery: any = {};

    if (query.age) {
      ageQuery.age = MoreThan(query.age);
    }

    return this.animalRepository.find({
      where: {
        age: ageQuery.age,
        location: query.location,
        gender: query.gender,
      },
    });
  }

  createAnimal(animal: AnimalCreateDto) {
    return this.animalRepository.save(animal);
  }

  async updateAnimal(id: string, updateData: AnimalCreateDto) {
    let animal = await this.animalRepository.findOneBy({ id });

    Object.assign(animal, updateData);

    const response = await this.animalRepository.save(animal);

    return response;
  }

  deleteAnimal(id: string) {
    return this.animalRepository.softDelete(id);
  }
}
