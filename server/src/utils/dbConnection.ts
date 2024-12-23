import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting DB", error);
  }
};
