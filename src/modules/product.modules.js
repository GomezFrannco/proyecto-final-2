import mongoose from "../config/mongodb.config.js";

export const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1,
  },
  timestamp: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    max: 200,
  },
  code: {
    type: String,
    required: true,
    max: 50,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

export const product = new mongoose.model("Productos", productSchema);
