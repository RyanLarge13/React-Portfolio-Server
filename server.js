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

const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = [
  "http://localhost:3000",
  "https://react-folio.onrender.com",
  "https://www.ryanlarge.dev",
];

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

app.listen(port, "0.0.0.0", () =>
  console.log(`Your app is running on port ${port} : https://localhost:${port}`)
);
