import express from "express";
import zookeepersRouter from "./routes/zookeepers.routes.js";
import animalsRouter from "./routes/animals.routes.js";

const router = express.Router();

router.use("/zookeepers", zookeepersRouter);

router.use("/animals", animalsRouter);

export default router;
