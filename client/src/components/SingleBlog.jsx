import React from "react";

function SingleBlog() {
  return (
    <div className="w-[93%] h-[70%] bg-black rounded-xl px-4 py-1">
      <h1 className="text-white text-3xl font-bold text-center mt-1">
        Say yes to Vs code
      </h1>
      <img
        src="./download.jpg"
        alt="image"
        className="w-full h-[30vh] object-cover mt-2  rounded-xl"
      />
      <div className="mt-10 flex gap-3">
        <button className="px-3 py-1 text-2xl text-white border-2 border-white rounded-full">
          tags
        </button>
        <button className="px-3 py-1 text-2xl text-white border-2 border-white rounded-full">
          tags
        </button>
        <button className="px-3 py-1 text-2xl text-white border-2 border-white rounded-full">
          tags
        </button>
      </div>

      <div className="author flex mt-2 ">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
          alt="author"
          className="w-12 h-12 rounded-full mt-8"
        />
        <div className="ml-3 mt-10">
          <h2 className="text-white text-sm font-bold">Author Name</h2>
          <p className="text-white text-sm">
            Published on January 1, 2022. Last updated on January 5, 2022.
          </p>
  
      </div>
    </div>
    </div>
  );
}

export default SingleBlog;
