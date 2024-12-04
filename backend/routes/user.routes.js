import express from "express";
import { userRegisterController } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.route("/register").post(userRegisterController);

export default userRouter;
