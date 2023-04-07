import express from "express";
import AnimalsController from "../controllers/animals.controller.js";

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals);

router.post("/", AnimalsController.addNewAnimal);

router.put("/:id", AnimalsController.updateAnimal);

router.delete("/:id", AnimalsController.deleteAnimal);

export default router;
