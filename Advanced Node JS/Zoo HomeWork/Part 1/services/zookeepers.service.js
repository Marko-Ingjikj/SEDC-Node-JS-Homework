import res from "express/lib/response.js";
import Zookeeper from "../models/zookeepers.model.js";
import { response } from "express";

export default class ZookeeperService {
  static async getAllZookeepers() {
    const zookeepers = await Zookeeper.find();

    return zookeepers;
  }

  static async addNewZookeeper(zookeeperData) {
    const zookeeper = new Zookeeper(zookeeperData);

    const response = await zookeeper.save();

    return response;
  }

  static async updateZookeeper(zookeeperData, zookeeperId) {
    const zookeeper = await Zookeeper.findById(zookeeperId);

    if (!zookeeper) throw new Error(`Zookeeper not found`);

    const keys = Object.keys(zookeeperData);

    keys.forEach((key) => {
      if (key != "_id" && key != "_v") {
        zookeeper[key] = zookeeperData[key];
      }
    });

    const updatedZookeeper = await zookeeper.save();

    return updatedZookeeper;
  }

  static async deleteZookeeper(zookeeperId) {
    await Zookeeper.findByIdAndDelete(zookeeperId);
  }
}
