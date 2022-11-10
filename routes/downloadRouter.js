import express from "express";
import { downloadPDF } from "../controllers/downloadController.js";

export const downloadRouter = express.Router();

downloadRouter.route("/pdf").get(downloadPDF);
