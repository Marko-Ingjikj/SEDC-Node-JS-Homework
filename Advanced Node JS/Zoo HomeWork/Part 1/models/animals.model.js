import { Schema, model } from "mongoose";

const characteristicsStructure = new Schema({
  food: {
    type: Array,
  },
  colour: {
    type: String,
  },
  isDangerous: {
    type: Boolean,
    default: false,
  },
  weight: {
    type: Number,
    min: 1,
  },
  enclosure: {
    type: String,
    required: true,
  },
});

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
  characteristics: {
    type: characteristicsStructure,
    required: true,
  },
});

const Animal = model("Animal", animalSchema);

export default Animal;
