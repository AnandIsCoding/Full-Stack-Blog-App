import React from "react";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="w-[99%]  px-2 py-5 bg-[#f494f4]  flex flex-col md:flex-row justify-between items-center mt-2 ml-2 rounded-xl backdrop-blur-3xl shadow-xl shadow-white ">
      <div className="w-[100%]  md:text-start  mb-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-black ml-5 ">Admin🖊️✏️</h1>
        <div className="flex gap-8 items-center pr-2">
            <NavLink className='text-lg font-bold text-black underline hover:text-xl hover:text-white ease-in-out duration-300' to='/'>All blogs</NavLink>
            <NavLink className='text-lg font-bold text-black underline hover:text-xl hover:text-white ease-in-out duration-300' to='/'>Create blog</NavLink>
            <NavLink className='text-lg font-bold text-black underline hover:text-xl hover:text-white ease-in-out duration-300' to='/'>Logout</NavLink>
        </div>
      </div>
      
    </div>
  );
}

export default AdminNavbar;
