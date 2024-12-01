import React, { useContext, useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BlogContext } from "../context/BlogContext";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function Blog() {
  const {allBlogs} = useContext(BlogContext)
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();
  
  const getBlogData = async () => {
    try {
      const response = await axios.get(
        `https://genmyblog.onrender.com/api/v1/blog/getblogbyid/${id}`
      );
      setBlogData(response.data.blog[0]);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  useEffect(() => {
    getBlogData();
  }, [id]);
 
  const { isAuthenticated, setIsAuthenticated } = useContext(BlogContext);
  return (
    <div className="w-full h-full flex">
      <div className="w-full min-h-[100vh] ">
        <div className=" min-h-[90%] bg-white    py-1 ml-1 pl-2 pr-2">
          <h1 className="text-black text-3xl font-extrabold text-center mt-1">
            {blogData ? blogData.blogTitle : 'loading title.....'}
          </h1>
          <img
            src={blogData ? blogData.blogThumbnail : 'loading thumbnail....'}
            alt="image"
            className="w-full h-[42vh] object-cover mt-2  rounded-xl "
          />
          <div className="mt-10 flex gap-3">
            {blogData &&
              blogData.blogTags.map((tag, index) => (
                <button
                  key={index}
                  className="px-3 py-2 text-2xl font-extralight rounded-xl bg-blue-700 text-white border-2 border-white"
                >
                  {tag}
                </button>
              ))}
          </div>

          <div className="description w-full text-violet-500 pl-3 pr-3 py-3 text-lg font-">
            {blogData ? blogData.blogDescription : 'loading description'}
          </div>

          <div className="author flex mt-2  ">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
              alt="author"
              className="w-12 h-12 rounded-full mt-8"
            />
            <div className="ml-3 mt-10">
              <h2 className="text-black text-sm font-bold">Author Name</h2>
              <p className="text-black text-sm">
                Published on {blogData? blogData.createdAt : 'loading'} Last updated on{" "}
                {blogData? blogData.updatedAt : 'loading'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] h-[80vh] overflow-y-scroll py-2">
        {/*suggestions  */}
        <div>
          <h1 className="text-center text-lg font-semibold">Suggestions</h1>
          <div className=" w-[50%] mx-auto h-[3px] bg-[#1d45f4]"></div>
          <div className=" w-[50%] mx-auto h-[3px] bg-[aqua]"></div>

          {
            allBlogs.map((blog, index) =>{
              return <NavLink to={`/blog/${blog._id}`} key={blog._id} className="w-full h-[30vh] cursor-pointer mt-2 bg-violet-400 rounded-xl px-2 py-1 flex">
            <img
              src={blog ? blog.blogThumbnail : 'loading thumbnail...'}
              alt="image"
              className="w-[40%] h-[28vh] object-cover mt-1  rounded-xl"
            />
            <div className="mt-3 flex gap-3"></div>

            <div className="author flex mt-2 ">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
                alt="author"
                className="w-12 h-12 rounded-full mt-24"
              />
              <div className="ml-3">
                <h1 className="text-black text-lg text-start font-bold  mt-1 title m-[-2vw]">
                 {blog ? blog.blogTitle : 'loading title...'}
                </h1>
                <div className="flex gap-3 ml-[-2vw]">
                {blog?
                  blog.blogTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-2 mt-10 py-2 text-sm font-extralight rounded-xl bg-blue-700 text-white  border-white"
                    >
                      {tag}
                    </button>
                  )) : 'loading tags...'}
                </div>
                <h2 className="text-white text-sm font-bold mt-8">
                  Author Name
                </h2>
                <p className="text-white text-sm">
                  Published on {blog ? blog.createdAt : '....'}. Last updated on {blog?blog.updatedAt : '...'}.
                </p>
              </div>
            </div>
          </NavLink>
            })
          }

          
        </div>
{/* comments */}
        <div className="absolute bottom-0 right-0  w-[28.5%] min-h-[19%]">
          <h1 className="text-xl font-bold  text-black mt-1">Comments</h1>
          {/* enter comments */}
          {isAuthenticated ? (
            <div className="flex gap-2">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
                alt="userImage"
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <textarea className="w-[24vw] h-[8vh] bg-transparent outline-none border-2 border-black rounded-xl"></textarea>
                <div>
                  <button className="px-4 py-1 bg-white text-black rounded-xl border-2 border-violet-500  font-bold">
                    Add
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl border-2 border-violet-500 ml-4 font-bold">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <IoPersonCircleOutline className="w-[45px] h-[45px] mt-1" />
              <div>
                <textarea className="w-[24vw] h-[8vh] bg-transparent outline-none border-2 border-black rounded-xl"></textarea>
                <div>
                  <button className="px-4 py-1 bg-white text-black rounded-xl border-2 border-violet-500  ml-4 font-bold">
                    Add
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl border-2 border-violet-500  ml-4 font-bold">
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          )}
          {/*list All comments */}
          {/* 1st comment */}
          <div className="flex gap-2 mb-[-39vw] mt-5 w-full min-h-[20vw] ">
            <img
              src="../Anand_Passport.jpg"
              alt="image"
              className="w-12 h-12 object-cover mt-5  rounded-full "
            />
            <div className="w-[25vw] h-[15vh] bg-white rounded-xl px-2 py-1">
              <div className="flex justify-between">
                <h1 className="text-sm font-bold text-black text-start">
                  Name
                </h1>
                <div className="icons flex gap-1">
                  <MdEdit className="w-5 h-5 cursor-pointer " />
                  <MdDelete className="w-5 h-5 cursor-pointer " />
                </div>
              </div>

              <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">
                your comment text
              </p>
              <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">
                Save
              </button>
            </div>
          </div>

          {/* 2nd comment */}
          <div className="flex gap-2 absolute top-[17rem] mt-5 w-full min-h-[20vw] ">
            <img
              src="../Anand_Passport.jpg"
              alt="image"
              className="w-12 h-12 object-cover mt-5  rounded-full "
            />
            <div className="w-[25vw] h-[15vh] bg-white rounded-xl px-2 py-1">
              <div className="flex justify-between">
                <h1 className="text-sm font-bold text-black text-start">
                  Name
                </h1>
                <div className="icons flex gap-1">
                  <MdEdit className="w-5 h-5 cursor-pointer " />
                  <MdDelete className="w-5 h-5 cursor-pointer " />
                </div>
              </div>

              <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">
                your comment text
              </p>
              <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">
                Save
              </button>
            </div>
          </div>

          {/* 3rd comment */}
          <div className="flex gap-2 absolute top-[25rem] mt-5 w-full min-h-[20vw] ">
            <img
              src="../Anand_Passport.jpg"
              alt="image"
              className="w-12 h-12 object-cover mt-5  rounded-full "
            />
            <div className="w-[25vw] h-[15vh] bg-white rounded-xl px-2 py-1">
              <div className="flex justify-between">
                <h1 className="text-sm font-bold text-black text-start">
                  Name
                </h1>
                <div className="icons flex gap-1">
                  <MdEdit className="w-5 h-5 cursor-pointer " />
                  <MdDelete className="w-5 h-5 cursor-pointer " />
                </div>
              </div>

              <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">
                your comment text
              </p>
              <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
