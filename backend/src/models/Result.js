import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },

    score: {
      type: Number,
      required: true,
      min: 0,
    },

    timeRemaining: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultsSchema);

export default Result;
