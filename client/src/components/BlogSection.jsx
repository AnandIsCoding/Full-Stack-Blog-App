import React from "react";
import SingleBlog from "./SingleBlog";

function BlogSection() {
  return (
    <div className="w-full h-[50vw] flex  px-4 py-5  ">
      <div className="w-[45%] h-full ">
        <SingleBlog />
      </div>

      <div
        className="w-[55%] flex flex-col gap-5 overflow-y-scroll
       px-10 pl-20 ml-10 mr-[-10vw]"
      >
        <div className="w-[70%] h-[60%] cursor-pointer bg-green-400 rounded-xl px-4 py-1">
          <h1 className="text-white text-3xl font-bold text-center mt-1">
            Say yes to Vs code
          </h1>
          <img
            src="./download.jpg"
            alt="image"
            className="w-full h-[30vh] object-cover mt-2  rounded-xl"
          />
          <div className="mt-3 flex gap-3">
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
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h2 className="text-white text-sm font-bold">Author Name</h2>
              <p className="text-white text-sm">
                Published on January 1, 2022. Last updated on January 5, 2022.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[60%] bg-blue-500 rounded-xl px-4 py-1">
          <h1 className="text-white text-3xl font-bold text-center mt-1">
            Say yes to Vs code
          </h1>
          <img
            src="./download.jpg"
            alt="image"
            className="w-full h-[30vh] object-cover mt-2  rounded-xl"
          />
          <div className="mt-3 flex gap-3">
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
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h2 className="text-white text-sm font-bold">Author Name</h2>
              <p className="text-white text-sm">
                Published on January 1, 2022. Last updated on January 5, 2022.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[60%] bg-[aqua] rounded-xl px-4 py-1">
          <h1 className="text-white text-3xl font-bold text-center mt-1">
            Say yes to Vs code
          </h1>
          <img
            src="./download.jpg"
            alt="image"
            className="w-full h-[30vh] object-cover mt-2  rounded-xl"
          />
          <div className="mt-3 flex gap-3">
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
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h2 className="text-white text-sm font-bold">Author Name</h2>
              <p className="text-white text-sm">
                Published on January 1, 2022. Last updated on January 5, 2022.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[60%] bg-[orange] rounded-xl px-4 py-1">
          <h1 className="text-white text-3xl font-bold text-center mt-1">
            Say yes to Vs code
          </h1>
          <img
            src="./download.jpg"
            alt="image"
            className="w-full h-[30vh] object-cover mt-2  rounded-xl"
          />
          <div className="mt-3 flex gap-3">
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
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h2 className="text-white text-sm font-bold">Author Name</h2>
              <p className="text-white text-sm">
                Published on January 1, 2022. Last updated on January 5, 2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
