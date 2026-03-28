<<<<<<< HEAD
import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureTitle: {
    type: String,
    required: true,
  },
  videoUrl: { type: String },
  publicId: { type: String },
  isPreviewFree: { type: Boolean },
},{timestamps:true});

export const Lecture = mongoose.model("Lecture", lectureSchema);
=======
import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureTitle: {
    type: String,
    required: true,
  },
  videoUrl: { type: String },
  publicId: { type: String },
  isPreviewFree: { type: Boolean },
},{timestamps:true});

export const Lecture = mongoose.model("Lecture", lectureSchema);
>>>>>>> 92922141f9ae83089065eadf0d98fc1038b6e522
