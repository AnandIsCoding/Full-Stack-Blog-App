import React, { useContext, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BlogContext } from "../context/BlogContext";

function Blog() {
  const {isAuthenticated, setIsAuthenticated} = useContext(BlogContext)
  return (
    <div className="w-full h-full flex">
      <div className="w-full min-h-[100vh]  ">
        <div className="w-[100 bg-blue-100%] min-h-[90%] bg-white    py-1 ml-1 pl-2 pr-2">
          <h1 className="text-black text-3xl font-bold text-center mt-1">
            Say yes to Vs code
          </h1>
          <img
            src="../download.jpg"
            alt="image"
            className="w-full h-[42vh] object-cover mt-2  rounded-xl "
          />
          <div className="mt-10 flex gap-3">
            <button className="px-3 py-1 text-2xl text-black border-2 border-black rounded-full bg-blue-100">
              tags
            </button>
            <button className="px-3 py-1 text-2xl text-black border-2 border-black rounded-full bg-blue-100">
              tags
            </button>
            <button className="px-3 py-1 text-2xl text-black border-2 border-black rounded-full bg-blue-100">
              tags
            </button>
          </div>

          <div className="description w-full text-violet-500 pl-3 pr-3 py-3 text-lg font-">
            A blog (a truncation of "weblog")[1] is an informational website
            consisting of discrete, often informal diary-style text entries
            (posts). Posts are typically displayed in reverse chronological
            order so that the most recent post appears first, at the top of the
            web page. In the 2000s, blogs were often the work of a single
            individual, occasionally of a small group, and often covered a
            single subject or topic. In the 2010s, "multi-author blogs" (MABs)
            emerged, featuring the writing of multiple authors and sometimes
            professionally edited. MABs from newspapers, other media outlets,
            universities, think tanks, advocacy groups, and similar institutions
            account for an increasing quantity of blog traffic. The rise of
            Twitter and other "microblogging" systems helps integrate MABs and
            single-author blogs into the news media. Blog can also be used as a
            verb, meaning to maintain or add content to a blog. The emergence
            and growth of blogs in the late 1990s coincided with the advent of
            web publishing tools that facilitated the posting of content by
            non-technical users who did not have much experience with HTML or
            computer programming. Previously, knowledge of such technologies as
            HTML and File Transfer Protocol had been required to publish content
            on the Web, and early Web users therefore tended to be hackers and
            computer enthusiasts. As of the 2010s, the majority are interactive
            Web 2.0 websites, allowing visitors to leave online comments, and it
            is this interactivity that distinguishes them from other static
            websites.[2] In that sense, blogging can be seen as a form of social
            networking service. Indeed, bloggers not only produce content to
            post on their blogs but also often build social relations with their
            readers and other bloggers.[3] Blog owners or authors often moderate
            and filter online comments to remove hate speech or other offensive
            content. There are also high-readership blogs which do not allow
            comments.
          </div>

          <div className="author flex mt-2 ">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x"
              alt="author"
              className="w-12 h-12 rounded-full mt-8"
            />
            <div className="ml-3 mt-10">
              <h2 className="text-black text-sm font-bold">Author Name</h2>
              <p className="text-black text-sm">
                Published on January 1, 2022. Last updated on January 5, 2022.
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

          <div className="w-full h-[30vh] cursor-pointer bg-green-400 mt-2 rounded-xl px-2 py-1 flex">
            <img
              src="../download.jpg"
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
                  Say yes to Vs code
                </h1>
                <div className="flex gap-3 ml-[-2vw]">
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                </div>
                <h2 className="text-white text-sm font-bold mt-8">
                  Author Name
                </h2>
                <p className="text-white text-sm">
                  Published on January 1, 2022. Last updated on January 5, 2022.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[30vh] cursor-pointer bg-pink-400 mt-2 rounded-xl px-2 py-1 flex">
            <img
              src="../download.jpg"
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
                  Say yes to Vs code
                </h1>
                <div className="flex gap-3 ml-[-2vw]">
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                </div>
                <h2 className="text-white text-sm font-bold mt-8">
                  Author Name
                </h2>
                <p className="text-white text-sm">
                  Published on January 1, 2022. Last updated on January 5, 2022.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[30vh] cursor-pointer bg-yellow-400 mt-2 rounded-xl px-2 py-1 flex">
            <img
              src="../download.jpg"
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
                  Say yes to Vs code
                </h1>
                <div className="flex gap-3 ml-[-2vw]">
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                  <button className="px-4 py-1 bg-white text-black rounded-xl mt-10">
                    tag
                  </button>
                </div>
                <h2 className="text-white text-sm font-bold mt-8">
                  Author Name
                </h2>
                <p className="text-white text-sm">
                  Published on January 1, 2022. Last updated on January 5, 2022.
                </p>
              </div>
            </div>
          </div>
        </div>

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

          <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">your comment text</p>
          <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">Save</button>
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

          <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">your comment text</p>
          <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">Save</button>
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

          <p className="px-3 py-2 shadow-inner shadow-violet-500 rounded-xl mt-2">your comment text</p>
          <button className="px-4 mt-1 bg-violet-300 text-black rounded-xl border-2 border-violet-500  font-semibold">Save</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Blog;
