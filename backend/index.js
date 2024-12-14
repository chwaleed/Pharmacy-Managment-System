import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";

dotenv.config();
const databaseUrl = process.env.DATABASE_URL;
const port = 4001;
const app = express();
const origin = "http://localhost:5173";

// Database Connection
mongoose
  .connect(databaseUrl)
  .then(() => console.log("Database Connected Successfuly"))
  .catch((err) => {
    console.log(err.message);
    process.exit();
  });

app.use(cors({ origin: true }));

app.use(express.json());

app.use("/api", routes);

const server = app.listen(port, () => {
  console.log(`Server is listining at Port ${port}`);
});
