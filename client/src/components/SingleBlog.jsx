import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { NavLink } from "react-router-dom";

function SingleBlog() {
  const { allBlogs } = useContext(BlogContext);
  const blog = allBlogs[1] || {}; // default to an empty object if allBlogs[0] doesn't exist
  const { blogThumbnail, blogDescription, blogTitle, blogTags, _id, createdAt } = blog;

  return (
    <div className="w-[93%] h-[70%] bg-black rounded-xl px-4 py-1">
      <h1 className="text-white text-3xl font-bold text-center mt-1">
        {blogTitle}
      </h1>
      <NavLink to={`/blog/${blog._id}`}>
      <img
        src={blogThumbnail}
        alt="image"
        className="w-full h-[30vh] object-cover mt-2  rounded-xl"
      />
      </NavLink>
      <div className="mt-10 flex gap-3">
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

      <div className="author flex mt-2 ">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
          alt="author"
          className="w-12 h-12 rounded-full mt-8"
        />
        <div className="ml-3 mt-10">
          <h2 className="text-white text-sm font-bold">Author Name</h2>
          <p className="text-white text-sm">
            {createdAt}
          </p>
  
      </div>
    </div>
    </div>
  );
}

export default SingleBlog;
