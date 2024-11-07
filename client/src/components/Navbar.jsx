import React from 'react'
import { MdSearch } from "react-icons/md";

function Navbar() {
  return (
    <div className='w-[99%] px-2 py-5 bg-[#f494f4]  flex flex-col md:flex-row justify-between items-center mt-2 ml-2 rounded-xl backdrop-blur-3xl shadow-xl shadow-white sticky'>
      <div className='w-[100%] md:w-[50%] text-center md:text-start mb-3'>
        <h1 className='text-2xl font-extrabold text-black '>📝Blog App📝</h1>
      </div>
      <div className='w-[100%] md:w-[40%] flex justify-between bg-transparent bg-zinc-100  border-2 border-blue-400 rounded-xl text-[violet]'>
            <input className='w-[80%] md:w-[35vw] px-7 py-4 outline-none bg-zinc-100  rounded-xl  ' type='text' placeholder='Enter blog name to read' id='search' autoComplete='false' />
            <MdSearch className=' mt-2 text-black w-[8vw] mr-3' size={40}/>
      </div>
    </div>
  )
}

export default Navbar
