/*Importing Controller functions to apply to each route with express.Router()*/
import express from "express";
import { body } from "express-validator";
import { emailMe } from "../controllers/emailController.js";

export const emailRouter = express.Router();

emailRouter
  .route("/ryanlarge")
  .post(
    body("name").not().isEmpty().trim().escape().isLength({ min: 3, max: 20 }),
    body("email").isEmail().normalizeEmail().isLength({ min: 10, max: 50 }),
    body("message").not().isEmpty().trim().escape(),
    emailMe
  );
