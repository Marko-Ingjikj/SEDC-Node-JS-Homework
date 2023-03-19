import fs from "fs";
import { v4 as uuid } from "uuid";

export const getAllTrainers = () => {
  let json = fs.readFileSync("./trainers.json", { encoding: "utf-8" });
  const trainersData = JSON.parse(json);

  return trainersData;
};

export const getTrainerById = (id) => {
  let allTrainers = getAllTrainers();

  const trainerById = allTrainers.find((trainer) => trainer.id === id);

  if (!trainerById) {
    console.log(`Couldn't find trainer with ${id} id`);
  }

  return trainerById;
};

export const saveTrainersData = (trainers) => {
  fs.writeFileSync("./trainers.json", JSON.stringify(trainers, null, 2));
};

export const addTrainer = (trainer) => {
  const allTrainers = getAllTrainers();

  allTrainers.push({
    ...trainer,
    id: uuid(),
  });

  saveTrainersData(allTrainers);
};

export const updateTrainer = (id, trainer) => {
  const allTrainers = getAllTrainers();

  const index = allTrainers.findIndex((trainer) => trainer.id === id);

  if (index < 0) {
    console.log(`Couldn't find trainer with ${id} id`);
  }

  allTrainers[index] = {
    ...allTrainers[index],
    ...trainer,
  };

  saveTrainersData(allTrainers);
};

export const deleteTrainerByID = (id) => {
  const allTrainers = getAllTrainers();

  const newTrainersData = allTrainers.filter((trainer) => trainer.id !== id);

  saveTrainersData(newTrainersData);
};

export const deleteAllTrainers = () => {
  const empty = {};

  saveTrainersData(empty);
};
