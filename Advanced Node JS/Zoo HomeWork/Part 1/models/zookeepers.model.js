import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ZookeepersModel {
  static async getAllZookeepers() {
    const collection = await getDb().collection("zookeepers");
    const zookeepers = await collection.find().toArray();

    return zookeepers;
  }

  static async addNewZookeeper(NewZookeeperData) {
    const collection = await getDb().collection("zookeepers");
    const newZookeeper = collection.insertOne(NewZookeeperData);

    return { id: newZookeeper.insertedId, ...NewZookeeperData };
  }

  static async updateZookeeper(updateData, zookeeperId) {
    const collection = await getDb().collection("zookeepers");
    const updatedZookeeper = await collection.updateOne(
      { _id: new ObjectId(zookeeperId) },
      { $set: updateData }
    );

    return updatedZookeeper;
  }

  static async deleteZookeeper(zookeeperId) {
    const collection = await getDb().collection("zookeepers");
    const deletedZookeeper = await collection.deleteOne({
      _id: new ObjectId(zookeeperId),
    });
  }
}
