import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose";

dotenvConfig({path: '.env'})

const MONGO_URI = process.env.MONGO_URI || "MONGO_URI"

export const connectMongoDB = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Finaliza el proceso si no se puede conectar
    }
  };