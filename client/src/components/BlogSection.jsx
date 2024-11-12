import React, { useContext } from "react";
import SingleBlog from "./SingleBlog";
import { BlogContext } from "../context/BlogContext";
import { NavLink } from "react-router-dom";

function BlogSection() {
  const { allBlogs } = useContext(BlogContext);

  const { blogThumbnail, blogDescription, blogTitle, blogTags, _id } = allBlogs;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { day: '2-digit', month: 'short' });
  };
  return (
    <div className="w-full h-[50vw] flex  px-4 py-5  ">
      <div className="w-[45%] h-full ">
        <SingleBlog />
      </div>

      <div
        className="w-[55%] flex flex-col gap-5 overflow-y-scroll
       px-10 pl-20 ml-10 mr-[-10vw]"
      >
        {allBlogs.map((blog, index) => {
          return (
            <NavLink to={`/blog/${blog._id}`}
              key={blog._id}
              className="w-[70%] h-[60%] cursor-pointer bg-green-400 rounded-xl px-4 py-1"
            >
              <h1 className="text-white text-3xl font-bold text-center mt-1">
                {blog.blogTitle}
              </h1>
              <img
                src={blog.blogThumbnail}
                alt="image"
                className="w-full h-[30vh] object-cover mt-2  rounded-xl"
              />
              <div className="mt-3 flex gap-3">
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
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <h2 className="text-white text-sm font-bold">Author Name</h2>
                  <p className="text-white text-sm">
                    
                      Published on {formatDate(blog.createdAt)} and Updated at {formatDate(blog.updatedAt)}
                    
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default BlogSection;
