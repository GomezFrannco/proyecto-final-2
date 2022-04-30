import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { autoIndex: false }, (err) => {
  if (!err) {
    console.log("Connected to MongoDB");
  } else {
    console.log("Error with MongoDB connection");
  }
});

export default mongoose;
