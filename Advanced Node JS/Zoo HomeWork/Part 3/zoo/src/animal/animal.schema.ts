import { Schema } from 'mongoose';

export const AnimalSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  location: String,
  gender: String,
  characteristics: {
    food: [String],
    colour: String,
    isDangerous: Boolean,
    weight: Number,
    enclosure: String,
  },
});
