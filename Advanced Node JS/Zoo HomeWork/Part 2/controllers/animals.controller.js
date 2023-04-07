import AnimalService from "../services/animals.service.js";

export default class AnimalsController {
  static async getAllAnimals(req, res) {
    try {
      const animals = await AnimalService.getAllAnimals();

      res.status(200).send(animals);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewAnimal(req, res) {
    try {
      const newAnimal = await AnimalService.addNewAnimal(req.body);

      res.status(200).send(newAnimal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateAnimal(req, res) {
    try {
      const updatedAnimal = await AnimalService.updateAnimal(
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
      await AnimalService.deleteAnimal(req.params.id);

      res.status(200).send("Deleted succesfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
