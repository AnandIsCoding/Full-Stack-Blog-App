
import express from "express";
import connectToDb from "./config/database.js";
import cors from "cors";
import userRouter from "./routes/user.router.js";


import cookieParser from "cookie-parser";
import blogRouter from "./routes/blog.router.js";
import path from 'path'

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const _dirname = path.resolve()

import fileupload from 'express-fileupload';

app.use(
  cors({
    origin: "https://genmyblog.onrender.com/",//frontend url
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


app.use(express.static(path.join(_dirname, "/client/dist")))
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"))
})

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
