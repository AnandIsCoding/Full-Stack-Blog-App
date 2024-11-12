import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    blogDescription: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 5000,
    },
    blogThumbnail: {
      type: String,
      required: true,
    },
    blogTags: {
      type: [String], // Specifies an array of strings
      required: false,
    },
    publicId: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: false,
    },
    blogComments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
export default blogModel;
