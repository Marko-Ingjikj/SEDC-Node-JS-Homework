import express from "express";
import cors from "cors";
import trainerRoutes from "./trainers.routes.js";

const PORT = 3000;
const HOSTNAME = "localhost";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", trainerRoutes);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
