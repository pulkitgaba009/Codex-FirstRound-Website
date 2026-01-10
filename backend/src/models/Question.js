import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    optionA: { 
        type: String, 
        required: true 
    },

    optionB: {
        type: String,
        required: true 
    },
    
    optionC: {
        type: String, 
        required: true 
    },

    optionD: {
        type: String, 
        required: true
    },

    answer: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      enum: ["C", "C++", "Java", "Python", "JavaScript"],
      required: true,
    },

    code: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
export default Question;
