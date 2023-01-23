/*Importing Controller functions to apply to each route with express.Router()*/
import express from "express";
import { sendProjects, sendBlogs } from "../controllers/devController.js";

export const devRouter = express.Router();

devRouter.route("/projects/:page").get(sendProjects);
devRouter.route("/blogs").get(sendBlogs);
