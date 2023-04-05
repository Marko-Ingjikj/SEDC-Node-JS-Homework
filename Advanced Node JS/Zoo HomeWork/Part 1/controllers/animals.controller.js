import AnimalsModel from "../models/animals.model.js";

export default class AnimalsController {
  static async getAllAnimals(req, res) {
    try {
      const animals = await AnimalsModel.getAllAnimals();

      res.status(200).send(animals);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewAnimal(req, res) {
    try {
      const newAnimal = await AnimalsModel.addNewAnimal(req.body);

      res.status(200).send(newAnimal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateAnimal(req, res) {
    try {
      const updatedAnimal = await AnimalsModel.updateAnimal(
        req.body,
        req.params.id
      );

      res.status(200).send(updatedAnimal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteAnimal(req, res) {
    try {
      await AnimalsModel.deleteAnimal(req.params.id);

      res.status(200).send("Deleted succesfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
