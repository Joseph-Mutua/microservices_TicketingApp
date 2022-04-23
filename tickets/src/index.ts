import mongoose from "mongoose";
import { app } from "./app";


const JWT_KEY = "asdfasdf"
const MONGO_URI="mongodb://tickets-mongo-srv:27017/tickets";

const start = async () => {
  if (!JWT_KEY) {
    throw new Error("JWT_KEY must be defined!");
  }
  if (!MONGO_URI) {
    throw new Error("MONGO_URI must be defined!");
  }


  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
