import express from "express";
const app = express();

import { currentUserRouter } from "./routes/current-user";

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(currentUserRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
