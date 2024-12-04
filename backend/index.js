import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import connectDb from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

//cors options
const corsOptions = {
  origin: "*",
  Credential: true,
};

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("i am active");
});



connectDb().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  }).catch(err => {
    console.error('Failed to connect to the database:', err);
  });
