import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { DatabaseModule } from 'src/database/database.module';
import { animalProviders } from './animal.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AnimalController],
  providers: [AnimalService, ...animalProviders],
})
export class AnimalModule {}
