import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName : {
        type:String,
        required:true,
        min:5,
        max:30
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
        min:5,
        max:128
    }
},{
   timestamps:true, 
})

const userModel = mongoose.model('User', userSchema)
export default userModel