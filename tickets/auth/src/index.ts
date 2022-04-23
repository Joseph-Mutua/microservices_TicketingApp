import mongoose from "mongoose";
import { app } from "./app";
require("dotenv").config();

const JWT_KEY = "asdfasdf"

const start = async () => {
  if (!JWT_KEY) {
    throw new Error("JWT_KEY must be defined!");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:127.0.0.1/auth");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();