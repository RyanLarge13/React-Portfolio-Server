import express from "express";
import { sendProjects } from "../controllers/devController.js";

export const devRouter = express.Router();

devRouter.route("/projects").get(sendProjects);
