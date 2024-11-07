import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectToDb = async () =>{
    await mongoose.connect(process.env.DATABASE_URI)
}
export default connectToDb