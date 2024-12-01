import React, { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";

function CreateBlog() {
  const tags = useRef(null);
  //data to store in database
  const blogTitle = useRef(null);
  const blogDescription = useRef(null);
  const blogThumbnail = useRef(null);
  const [blogTags, setBlogTags] = useState([]);

  const [loading, setLoading] = useState(false)

  const handleAddTag = (event) => {
    event.preventDefault();
    if (tags.current.value.trim() !== "") {
      setBlogTags([...blogTags, tags.current.value]);
      tags.current.value = "";
    }
  };

  const handleDeleteTag = (index) => {
    setBlogTags(blogTags.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (blogThumbnail.current.files[0].size > 1000000) {
      alert("Please enter thumbnail less than 1 MB");
      return;
    }
    console.log(`Blog title is ${blogTitle.current.value}`);
    console.log(`Blog tags are ${blogTags}`);
    console.log(`Blog thumbnail is ${blogThumbnail.current.files[0].name}`);
    console.log(`Blog description is ${blogDescription.current.value}`);
    if (blogThumbnail.current.files[0].size > 1000000) {
      alert("Please enter a thumbnail less than 1 MB");
      return;
    }
    setLoading(true)

    const formData = new FormData();
    formData.append("blogTitle", blogTitle.current.value);
    formData.append("blogDescription", blogDescription.current.value);
    formData.append("blogTags", blogTags); // Send tags as JSON
    formData.append("blogThumbnail", blogThumbnail.current.files[0]);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/blog/createblog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await res.data;
     setLoading(false)
     
      toast.success('Blog created successfully');
      console.log(data.message);
       // Clear form fields on successful submission
    blogTitle.current.value = "";
    blogDescription.current.value = "";
    blogThumbnail.current.value = "";
    setBlogTags([]);
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
      alert('Refresh all blogs section if not created try again ')
    }
  };

  return (
    <div className="flex justify-center items-center px-15 py-8">
      {
        loading ? <img src='/loader.gif' className="w-[80vw] h-[80vh] z-10 object-cover mx-auto" /> : <div className="w-[95%] md:w-[80%] mx-auto min-h-[34vw] bg-white rounded-xl px-5 py-3">
        <h1 className="text-2xl text-black font-bold text-start font-serif">
          Here we gonna create blog ✌️✌️
        </h1>
        <div className="w-[70%] h-[3px] mt-2 mb-3 bg-violet-600 rounded-full"></div>
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <label
            htmlFor="title"
            className="text-lg mt-5 cursor-pointer font-semibold text-black"
          >
            Title of post
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            ref={blogTitle}
            placeholder="Enter title of post"
            className="w-full h-[6vh] bg-transparent outline-none rounded-xl border-2 border-violet-600 mt-2 py-3 text-lg px-3 text-violet-500 bg-2"
          />

          <label
            htmlFor="tag"
            className="text-lg mt-4 cursor-pointer font-semibold text-black"
          >
            # Tags
          </label>
          <div className="flex">
            <input
              ref={tags}
              type="text"
              name="tag"
              id="tag"
              placeholder="Enter Tags of post"
              className="w-[90%] h-[6vh] bg-transparent outline-none rounded-xl border-2 border-violet-600 mt-2 py-3 text-lg px-3 text-violet-500"
            />
            <button
              onClick={handleAddTag}
              className="ml-2 w-[8vw] text-lg text-black px-3 h-10 mt-2 py-1 bg-violet-500 rounded-xl"
            >
              Add
            </button>
          </div>
          <div className="Alltags w-full rounded-full py-3 px-3 flex flex-wrap gap-1">
            {blogTags.map((item, index) => (
              <h1
                key={index}
                className="px-3 py-1 rounded-xl bg-zinc-200 border-2 border-black flex"
              >
                {item}
                <span className="ml-1 mt-1 text-blue-600 cursor-pointer">
                  <MdDelete onClick={() => handleDeleteTag(index)} />
                </span>
              </h1>
            ))}
          </div>

          <label
            htmlFor="thumbnail"
            className="mt-4 cursor-pointer font-semibold text-black mb-1"
          >
            Choose image for thumbnail
          </label>
          <input
            required
            type="file"
            id="thumbnail"
            name="thumbnail"
            ref={blogThumbnail}
            className="bg-violet-300 text-white text-lg font-semibold rounded-r-2xl w-full md:w-[50%]"
          />

          <label
            htmlFor="description"
            className="text-lg mt-5 cursor-pointer font-semibold text-black"
          >
            Description of post
          </label>
          <textarea
            required
            name="description"
            id="description"
            ref={blogDescription}
            placeholder=" Minimum 10 characters"
            className="w-full min-h-[30vh] bg-transparent outline-none rounded-xl border-2 border-violet-600 mt-2 py-3 text-lg px-3 text-zinc-800 font-semibold"
          ></textarea>
          <button
            type="submit"
            className="w-full px-5 py-3 bg-violet-500 rounded-xl mt-3 text-lg font-bold text-black"
          >
            Create Post
          </button>
        </form>
      </div>
      }
    </div>
  );
}

export default CreateBlog;
