import blogModel from "../models/blog.model.js";
import { v2 as cloudinary } from 'cloudinary';

async function uploadFileToCloudinary(file, folder){
    const options = {folder}
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}
function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type)
}

export const addBlogController = async (req, res) => {
  try {
    const { blogTitle, blogDescription, blogTags } = req.body;

    // Check if field are provided
    if(!blogTitle || !blogDescription || !blogTags){
      res.status(300).json({message:'blogTitle, description, tags are required', success:false})
    }
   

    const thumbnailFile = req.files.blogThumbnail;
    if(!thumbnailFile){
      res.status(300).json({message:'thumbnail is required', success:false})
    }
    

    if (!req.files || !req.files.blogThumbnail) {
        return res
          .status(400)
          .json({ message: "Thumbnail file is required", success: false });
      }
    // Supported file types
    const supportedTypes = ["jpg", "png", "jpeg"];
    const fileType = thumbnailFile.name.split(".").pop();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res
        .status(400)
        .json({ message: "File type not supported", success: false });
    }

    // Upload file to Cloudinary
    const response = await uploadFileToCloudinary(thumbnailFile, "BlogApp");

    // Create new blog
    await blogModel.create({
      blogTitle,
      blogDescription,
      blogTags,
      blogThumbnail: response.secure_url,
    });

    return res
      .status(200)
      .json({ message: "Blog created successfully", success: true });
  } catch (error) {
    console.error("Error in addBlogController:", error); // Log specific error
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
      
  }
};


export const getAllBlogs = async(req,res) =>{
  try{
    const blogs = await blogModel.find().sort({createdAt:-1})
    if(!blogs){
      return res.status(404).json({message:'No Blogs Found', success:false})
    }
    return res.status(200).json({message: 'All Blogs fetched', blogs, success:true})    
  }
  catch(error){
    console.log(error)
    return res.status(500).json({message:'Internal server error', success:false})
  }
}

export const getBlogById = async(req,res) =>{
  try {
    const {id} = req.params
    const blog = await blogModel.find({_id: id})
    if(!blog){
      return res.status(404).json({message:'No Blog Found', success:false})
    }
    return res.status(200).json({message: 'Blog Successfully fetched', blog, success:true})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:'Internal server error', success:false})
  }
}
