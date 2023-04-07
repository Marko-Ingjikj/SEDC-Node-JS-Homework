import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class AnimalsModel {
  static async getAllAnimals() {
    const collection = await getDb().collection("animals");
    const animals = await collection.find().toArray();

    return animals;
  }

  static async addNewAnimal(newAnimalData) {
    const collection = await getDb().collection("animals");
    const newAnimal = collection.insertOne(newAnimalData);

    return newAnimal;
  }

  static async updateAnimal(updateData, animalsId) {
    const collection = await getDb().collection("animals");
    const updateAnimal = collection.updateOne(
      { _id: new ObjectId(animalsId) },
      { $set: updateData }
    );

    return updateAnimal;
  }

  static async deleteAnimal(animalsId) {
    const collection = await getDb().collection("animals");
    const deletedAnimal = await collection.deleteOne({
      _id: new ObjectId(animalsId),
    });
  }
}
