import { AnimalSchema } from './animal.schema';
import { Connection } from 'mongoose';

export const animalProviders = [
  {
    provide: 'ANIMAL_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Animal', AnimalSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
