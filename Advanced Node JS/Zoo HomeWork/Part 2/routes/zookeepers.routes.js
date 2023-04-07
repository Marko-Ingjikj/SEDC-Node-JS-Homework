import express from "express";
import zookeepersController from "../controllers/zookeepers.controller.js";
import zookeepersValidator from "../middleware/zookeepers.validator.js";

const router = express.Router();

router.get("/", zookeepersController.getAllZookeepers);

router.post("/", zookeepersValidator, zookeepersController.addNewZookeeper);

router.put("/:id", zookeepersController.updateZookeeper);

router.delete("/:id", zookeepersController.deleteZookeeper);

export default router;
