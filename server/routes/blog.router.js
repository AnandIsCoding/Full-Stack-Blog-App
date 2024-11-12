import express from "express";
const blogRouter = express.Router();

import { addBlogController, getAllBlogs, getBlogById } from "../controllers/blog.controller.js";
import tokenAuthentication from '../middleware/authentication.js'
//define route
blogRouter.post("/createblog", tokenAuthentication, addBlogController);
blogRouter.get('/getblogs', getAllBlogs)
blogRouter.get('/getblogbyid/:id', getBlogById)
export default blogRouter;
