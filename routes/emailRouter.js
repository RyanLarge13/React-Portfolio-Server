import express from "express";
import {emailMe} from "../controllers/emailController.js";

export const emailRouter = express.Router();

emailRouter.route("/ryanlarge").post(emailMe);
