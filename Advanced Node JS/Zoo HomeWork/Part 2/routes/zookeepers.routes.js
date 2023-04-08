import express from "express";
import zookeepersController from "../controllers/zookeepers.controller.js";

const router = express.Router();

router.get("/", zookeepersController.getAllZookeepers);

router.get("/:id", zookeepersController.getAnimalById);

router.post("/", zookeepersController.addNewZookeeper);

router.put("/:id", zookeepersController.updateZookeeper);

router.delete("/:id", zookeepersController.deleteZookeeper);

export default router;
