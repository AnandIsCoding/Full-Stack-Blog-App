import dotenv from "dotenv";
import express from "express";
import connectToDb from "./config/database.js";
import cors from "cors";
import userRouter from "./routes/user.router.js";

import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//routers
app.use('/api/v1', userRouter);

//database connectivity
connectToDb()
  .then(() => {
    console.log("Database connection established");
    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.SERVER_PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("database connection failed");
    console.log(error);
  });
