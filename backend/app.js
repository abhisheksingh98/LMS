import express from "express";
import { config } from "dotenv";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

config({
  path: "./config/config.env",
});

const app = express();

//Importing and using routes

app.use("/api/v1", course);
app.use("/api/v1", user);

export default app;
