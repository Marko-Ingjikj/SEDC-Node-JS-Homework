import { Schema, model } from "mongoose";

const zookeepersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 5,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: 18,
    max: 110,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  animals: {
    type: Schema.Types.ObjectId,
    ref: "Animal",
  },
});

const Zookeeper = model("Zookeeper", zookeepersSchema);

export default Zookeeper;
