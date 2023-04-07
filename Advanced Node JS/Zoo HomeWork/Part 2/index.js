import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import router from "./router.const.js";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_SERVER}.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, async (error) => {
  if (error) console.log("Error while listening:", error);

  await mongoose.connect(MONGO_URI);

  console.log(`Server is listening at http://${HOST}:${PORT}`);
});
