import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const databaseUrl = process.env.DATABASE_URL;

// Database Connection
mongoose
  .connect(databaseUrl)
  .then(() => console.log("Database Connected Successfuly"))
  .catch((err) => {
    console.log(err.message);
    process.exit();
  });
