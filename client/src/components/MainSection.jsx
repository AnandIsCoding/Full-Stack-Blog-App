import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
function MainSection() {
  const { allBlogs } = useContext(BlogContext);
  const blog = allBlogs[0] || {}; // default to an empty object if allBlogs[0] doesn't exist
  const { blogThumbnail, blogDescription, blogTitle, blogTags, _id } = blog;
  const shortDescription = blogDescription ? blogDescription.slice(0, 300) : '';

  return (
    <div className="w-[200vw] md:w-[99%] h-[70vh] mr-2 ml-[-50vw] md:ml-2 mt-5 flex flex-col md:flex-row justify-between items-center rounded-xl gap-2 md:gap-0">
      <div className=" w-[50%] md:w-[65%] h-[100%] rounded-xl px-4 py-10 ">
        <h1 className="text-6xl text-black font-extrabold capitalize mt-5">
          {blogTitle}
        </h1>
        <p className="mt-6 text-zinc-500 text-xl font-bold mb-3">
          {shortDescription}.......
        </p>
        <div className="flex gap-2 mb-5">
          {blogTags &&
            blogTags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-2 text-2xl font-extralight rounded-xl bg-black text-white border-2 border-white"
              >
                {tag}
              </button>
            ))}
        </div>
        <NavLink
          to={`/blog/${_id}`}
          className="text-xl font-bold bg-blue-700 rounded-full  px-4 py-2 text-white "
        >
          Read this
        </NavLink>
      </div>
      <div className=" w-[50%] md:w-[35%] h-[80%] bg-blue-400 rounded-xl overflow-hidden ">
        <img
          src={blogThumbnail}
          alt="image"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}

export default MainSection;
