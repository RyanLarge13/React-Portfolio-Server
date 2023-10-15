import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import parser from "body-parser";
import { devRouter } from "./routes/devRouter.js";
import { downloadRouter } from "./routes/downloadRouter.js";
import { emailRouter } from "./routes/emailRouter.js";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();
/*=====Initializing Express & defining origins and port======*/
const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = [
  "https://react-folio.onrender.com",
  "https://www.ryanlarge.dev",
];
/*======Middleware======*/
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let message =
          "The CORS policy for this application doesn’t allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/", downloadRouter);
app.use("/dev", devRouter);
app.use("/mailme", emailRouter);
/*======Providing Express with the port to listen and start the server======*/
app.listen(port, "0.0.0.0", () =>
  console.log(`Your app is running on port ${port} : https://localhost:${port}`)
);
