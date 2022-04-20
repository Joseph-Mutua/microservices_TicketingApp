import express from "express";
const app = express();

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

import { errorHandler } from './middlewares/error-handler';

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
