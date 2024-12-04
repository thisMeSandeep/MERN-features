import express from "express";
import {
  userRegisterController,
  userLoginController,
  userLogoutController,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.route("/register").post(userRegisterController);
userRouter.route("/login").post(userLoginController);
userRouter.route("/logout").post(userLogoutController);

export default userRouter;
