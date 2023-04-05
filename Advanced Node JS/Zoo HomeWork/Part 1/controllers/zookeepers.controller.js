import ZookeepersModel from "../models/zookeepers.model.js";

export default class ZookeepersController {
  static async getAllZookeepers(req, res) {
    try {
      const zookeepers = await ZookeepersModel.getAllZookeepers();

      res.status(200).send(zookeepers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewZookeeper(req, res) {
    try {
      const NewZookeeper = await ZookeepersModel.addNewZookeeper(req.body);

      res.status(200).send(NewZookeeper);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateZookeeper(req, res) {
    try {
      const updateZookeeper = await ZookeepersModel.updateZookeeper(
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
      await ZookeepersModel.deleteZookeeper(req.params.id);

      res.status(200).send("Deleted successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
