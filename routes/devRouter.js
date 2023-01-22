import express from "express";
import { sendProjects, sendBlogs } from "../controllers/devController.js";

export const devRouter = express.Router();

devRouter.route("/projects/:page").get(sendProjects);
devRouter.route("/blogs").get(sendBlogs)
