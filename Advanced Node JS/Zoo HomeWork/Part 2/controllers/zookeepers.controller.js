import ZookeeperService from "../services/zookeepers.service.js";

export default class ZookeepersController {
  static async getAllZookeepers(req, res) {
    let query = {};

    if (req.query.location) {
      query.location = req.query.location;
    }

    if (req.query.isActive) {
      query.isActive = req.query.isActive;
    }

    if (req.query.age) {
      query.age = { $gte: parseInt(req.query.age) };
    }

    try {
      if (query) {
        const zookeepers = await ZookeeperService.getAllZookeepersQuery(query);

        res.status(200).send(zookeepers);
      } else {
        const zookeepers = await ZookeeperService.getAllZookeepers();

        res.status(200).send(zookeepers);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAnimalById(req, res) {
    const id = req.params.id;

    try {
      const zookeeper = await ZookeeperService.getZookeeperById(id);

      res.status(200).send(zookeeper);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewZookeeper(req, res) {
    try {
      const NewZookeeper = await ZookeeperService.addNewZookeeper(req.body);

      res.status(200).send(NewZookeeper);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateZookeeper(req, res) {
    try {
      const updateZookeeper = await ZookeeperService.updateZookeeper(
        req.body,
        req.params.id
      );

      res.status(200).send(updateZookeeper);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteZookeeper(req, res) {
    try {
      await ZookeeperService.deleteZookeeper(req.params.id);

      res.status(200).send("Deleted successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
