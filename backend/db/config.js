import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    const conn = await mongoose.connect(`${MONGODB_URI}todoDB`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB not connected", error);
  }
}

export default connectDB