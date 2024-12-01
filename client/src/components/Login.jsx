import React, { useContext, useState, useEffect } from 'react'
import { BlogContext } from '../context/BlogContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import {authHelper} from '../helpers/authHelper.js'

function Login() {
    const {isAuthenticated, setIsAuthenticated,  email, password} = useContext(BlogContext)
    const handleSubmit = async(event) =>{
      event.preventDefault()
      console.log(email.current.value , password.current.value)
      try {
        const res = await axios.post('https://genmyblog.onrender.com/api/v1/login', {
          email :email.current.value,
          password:password.current.value
        })
        const data = await res.data
        toast.success(data.message)
        setIsAuthenticated(true)
        console.log(data.message)

      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error.response.data.message)
      }
    }

    useEffect(() => {
      authHelper()
        .then((data) => setIsAuthenticated(data))
        .catch((error) => console.log(error.message));
    }, []);
     
  return (
    <div className='flex items-center justify-center bg-white h-[100vh]'>
    <form onSubmit={handleSubmit} className='flex flex-col w-[90%] md:w-[30%] px-5 py-14 gap-10 border-8 shadow-inner shadow-violet-500  text-lg text-black border-black rounded-xl mt-[57vw] md:mt-[5vw] '>
    
        <input required ref={email} id='email'  type='email' placeholder='Enter your email 📩' className='px-5 py-3 outline-none bg-transparent border-4 border-black rounded-xl text-black font-bold shadow-inner shadow-black' autoComplete='false' ></input>

        <input required ref={password} id='password'   type='password' placeholder='Enter your password 🔑' className='px-5 py-3 outline-none bg-transparent border-4 border-black rounded-xl text-black font-bold shadow-inner shadow-black' autoComplete='false'></input>

        <input type='submit' value='Submit' className='px-5 py-2 outline-none bg-black text-2xl text-white font-extrabold rounded-xl cursor-pointer shadow shadow-violet-300'></input>

        <p>login with aditya@gmail.com and Aditya@1245 (available for some days) </p>
    </form>
    </div>
  )
}

export default Login
