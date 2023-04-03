import express from "express";
import * as trainerService from "./trainers.service.js";

const router = express.Router();

router.get("/trainers", (req, res) => {
  try {
    const trainers = trainerService.getAllTrainers();
    res.status(200).send(trainers);
  } catch (error) {
    res.status(500).send("Problem");
  }
});

router.post("/trainers", (req, res) => {
  const trainer = req.body;
  try {
    trainerService.addTrainer(trainer);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("Problem");
  }
});

router.put("/trainers/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  try {
    trainerService.updateTrainer(id, body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("Problem");
  }
});

router.delete("/trainers/:id", (req, res) => {
  const id = req.params.id;

  try {
    trainerService.deleteTrainerByID(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("Problem");
  }
});

router.delete("/trainers", (req, res) => {
  try {
    trainerService.deleteAllTrainers();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("Problem");
  }
});

export default router;
