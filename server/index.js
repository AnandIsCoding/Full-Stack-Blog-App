
import express from "express";
import connectToDb from "./config/database.js";
import cors from "cors";
import userRouter from "./routes/user.router.js";


import cookieParser from "cookie-parser";
import blogRouter from "./routes/blog.router.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

import fileupload from 'express-fileupload';

app.use(
  cors({
    origin: "http://localhost:5173",//frontend url
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



app.use(fileupload({
  useTempFiles: true,
  tempFileDir: '/temp/'
}));


// Cloudinary setup
import { cloudinaryConnect } from './config/cloudinary.js';
cloudinaryConnect();  // Correct way to call cloudinaryConnect


//routers
app.use('/api/v1', userRouter);
app.use('/api/v1/blog', blogRouter)



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
