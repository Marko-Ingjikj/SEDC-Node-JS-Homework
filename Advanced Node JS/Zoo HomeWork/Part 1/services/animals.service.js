import Animal from "../models/animals.model.js";

export default class AnimalService {
  static async getAllAnimals() {
    const animals = await Animal.find();

    return animals;
  }

  static async addNewAnimal(animalData) {
    const animal = await new Animal(animalData);

    const response = await animal.save();

    return response;
  }

  static async updateAnimal(animalData, animalId) {
    const animal = await Animal.findById(animalId);

    if (!animal) throw new Error("Animal not found");

    const keys = Object.keys(animalData);

    keys.forEach((key) => {
      if (key != "_id" && key != "_v") {
        animal[key] = animalData[key];
      }
    });

    const updatedAnimal = animal.save();

    return updatedAnimal;
  }

  static async deleteAnimal(animalId) {
    await Animal.findByIdAndDelete(animalId);
  }
}
