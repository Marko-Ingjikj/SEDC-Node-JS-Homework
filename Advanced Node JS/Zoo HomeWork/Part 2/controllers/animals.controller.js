import AnimalService from "../services/animals.service.js";

export default class AnimalsController {
  static async getAllAnimals(req, res) {
    let query = {};

    if (req.query.location) {
      query.location = req.query.location;
    }

    if (req.query.gender) {
      query.gender = req.query.gender;
    }

    if (req.query.age) {
      query.age = { $gte: parseInt(req.query.age) };
    }

    try {
      if (query) {
        const animals = await AnimalService.getAllAnimalsQuery(query);

        res.status(200).send(animals);
      } else {
        const animals = await AnimalService.getAllAnimals();

        res.status(200).send(animals);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAnimalById(req, res) {
    const id = req.params.id;

    try {
      const animal = await AnimalService.getAnimalById(id);

      res.status(200).send(animal);
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

  static async assignZookeeper(req, res) {
    try {
      const animalId = req.params.id;
      const zookeeperIds = req.body.zookeepers;

      const response = await AnimalService.assignZookeeper(
        animalId,
        zookeeperIds
      );
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
}
