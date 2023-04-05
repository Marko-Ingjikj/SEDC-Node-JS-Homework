import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectToDataBase } from "./db/mongo-connection.js";
import router from "./router.const.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, async (error) => {
  if (error) console.log("Error while listening:", error);

  await connectToDataBase();

  console.log(`Server is listening at http://${HOST}:${PORT}`);
});
