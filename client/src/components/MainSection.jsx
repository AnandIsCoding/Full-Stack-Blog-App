import React from "react";
import { NavLink } from "react-router-dom";
function MainSection() {
  return (
    <div className="w-[200vw] md:w-[99%] h-[70vh] mr-2 ml-[-50vw] md:ml-2 mt-5 flex flex-col md:flex-row justify-between items-center rounded-xl gap-2 md:gap-0">
      <div className=" w-[50%] md:w-[65%] h-[100%] rounded-xl px-4 py-10 ">
        <h1 className="text-6xl text-black font-extrabold capitalize mt-5">
          I Love Vs Code and love <br></br> to read this
        </h1>
        <p className="mt-6 text-zinc-400 font-bold mb-3">
          Satinder Sartaj - Sanu Aj kal Shisha Bada Chhed Da, Naale Cheti Gall
          Baat Ni Nibed Da,Kare Nain Je Milake Gustakhiyan, Saade Khayal'an Wali
          Bunti Udhed'da Ik Gal Sun Mere Haniya, Assi kahiyan Vi Te Kahiyan
          Naiyo Janiyan Chal Rooha Ch Lukaiye Edde Mehak Nu, Look Dekh Diyan
          Pariyan Te Raniya
        </p>
        <div className="flex gap-2 mb-5">
          <button className="px-3 py-2 text-2xl font-extralight rounded-xl bg-black text-white border-2 border-white">
            tags
          </button>
          <button className="px-3 py-2 text-2xl font-extralight rounded-xl bg-black text-white border-2 border-white">
            tags
          </button>
        </div>
        <NavLink to='/blog/123' className="text-xl font-bold bg-blue-700 rounded-full  px-4 py-2 text-white ">
          Read this
        </NavLink>
      </div>
      <div className=" w-[50%] md:w-[35%] h-[80%] bg-blue-400 rounded-xl overflow-hidden ">
        <img src='https://i.ytimg.com/vi/v6eMKfr8qEY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAwN2CyOo9lHgx5Me9Ub3PGtQYYA' alt='image' className="w-full h-full object-cover " />
      </div>
    </div>
  );
}

export default MainSection;
