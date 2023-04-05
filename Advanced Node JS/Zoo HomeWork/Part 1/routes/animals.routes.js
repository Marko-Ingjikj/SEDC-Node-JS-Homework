import express from "express";
import AnimalsController from "../controllers/animals.controller.js";
import animalsValidator from "../middleware/animals.validator.js";

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals);

router.post("/", animalsValidator, AnimalsController.addNewAnimal);

router.put("/:id", AnimalsController.updateAnimal);

router.delete("/:id", AnimalsController.deleteAnimal);

export default router;
