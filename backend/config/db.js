import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("error connecting DB");
    process.exit(1);
  }
};

export default connectDb;
