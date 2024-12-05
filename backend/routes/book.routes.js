import { bookController } from "../controller/book.controller.js";
import express from "express";

const bookRouter = express.Router();

bookRouter.route("/").get(bookController);

export default bookRouter;
