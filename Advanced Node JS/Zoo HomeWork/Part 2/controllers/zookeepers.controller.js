import ZookeeperService from "../services/zookeepers.service.js";

export default class ZookeepersController {
  static async getAllZookeepers(req, res) {
    try {
      const zookeepers = await ZookeeperService.getAllZookeepers();

      res.status(200).send(zookeepers);
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
