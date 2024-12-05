import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.routes.js";


const app = express();
const PORT = process.env.PORT || 3000;


const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

//routes

app.use("/api/auth", userRouter);


connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
