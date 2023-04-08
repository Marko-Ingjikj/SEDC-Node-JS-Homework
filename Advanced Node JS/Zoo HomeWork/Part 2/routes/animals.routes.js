import express from "express";
import AnimalsController from "../controllers/animals.controller.js";

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals);

router.get("/:id", AnimalsController.getAnimalById);

router.post("/", AnimalsController.addNewAnimal);

router.put("/:id", AnimalsController.updateAnimal);

router.delete("/:id", AnimalsController.deleteAnimal);

router.patch("/:id/zookeepers", AnimalsController.assignZookeeper);

export default router;
