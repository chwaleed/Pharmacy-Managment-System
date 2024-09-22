import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

dotenv.config();
const databaseUrl = process.env.DATABASE_URL;
const port = 4001;
const app = express();

// Database Connection
mongoose
  .connect(databaseUrl)
  .then(() => console.log("Database Connected Successfuly"))
  .catch((err) => {
    console.log(err.message);
    process.exit();
  });

app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is listining at Port ${port}`);
});
