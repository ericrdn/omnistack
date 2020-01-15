import mongoose from "mongoose";

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    emum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

export default PointSchema;
