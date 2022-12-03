import express from "express";
import {body} from 'express-validator'
import { emailMe } from "../controllers/emailController.js";

export const emailRouter = express.Router();

emailRouter.route("/ryanlarge").post(body("email").isEmail(), emailMe);
