import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minLength: 3,
  },
  hr: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Task", TaskSchema); //table name will convert to plural and lower case
