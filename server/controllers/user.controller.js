import dotenv from "dotenv";
import userModel from "../models/user.models.js";
import { ValidateSignupData } from "../utils/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const SignupController = async (req, res) => {
 
  try {
    //validate the data
   
    const validationResult = ValidateSignupData(req);
    if (validationResult) {
      return res.status(400).json(validationResult);
    }
    const { userName, email, password } = req.body;
    //check if userExists
    const userAvailable = await userModel.findOne({ email });
    if (userAvailable)
      return res
        .status(409)
        .json({ message: "User already exists", success: false });

    //encrypt password using bcrypt.hash
    const encryptedPassword = await bcrypt.hash(password, 15);
    //create new user
    await userModel.create({
      userName,
      email,
      password: encryptedPassword,
    });
    return res
      .status(200)
      .json({ message: "User created successfuly", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Internal server error" });
    console.log(error);
  }
};

export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user available with email
    const userAvailable = await userModel.findOne({ email });
    if (!userAvailable)
      return res
        .status(404)
        .json({ message: "Please Signup first", success: false });
    //compare password with hashed password
    const isPasswordMatch = await bcrypt.compare(
      password,
      userAvailable.password
    );
    if (!isPasswordMatch)
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    //generate jwt token and assign it to res.cookie
    const token = jwt.sign(
      { _id: userAvailable._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res
      .status(200)
      .json({
        message: `Welcome back Mr ${userAvailable.userName}`,
        success: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Internal server error" });
  }
};

export const LogoutController = async(req, res) =>{
    try{
        res.cookie("token",null, {maxAge:0}).status(200).json({message:'Logout Successfull', success:true})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:'Internal server error', success:false})
    }
}

export const isAuth = async(req, res) =>{
  try {
    const id = req.user
    const user = await userModel.find(id).select('-password')
    if(!user){
      return res.status(404).json({message:'access denied', success:false})
    }
    return res.status(200).json({message:'access granted', success:true, user })
  } catch (error) {
      console.log(error) 
      return res.status(500).json({message:error.message, success:false})   
  }
}