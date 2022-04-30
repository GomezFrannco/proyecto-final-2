import mongoose from "../config/mongodb.config.js";
import { productSchema, product } from "./product.modules.js";

const cartSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1,
  },
  timestamp: {
    type: String,
  },
  products: [
    {
      type: productSchema,
      ref: "Products",
    },
  ],
});

export const cart = mongoose.model("Carts", cartSchema);
