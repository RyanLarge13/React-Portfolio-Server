import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { devRouter } from "./routes/devRouter.js";
import { downloadRouter } from "./routes/downloadRouter.js";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();

const app = express();
const port = 8080;
const allowedOrigins = [
  "http://localhost:3000",
  "https://todo-fullstack-production.up.railway.app/",
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
app.use("/", downloadRouter);
app.use("/dev", devRouter);

app.listen(port, "0.0.0.0", () =>
  console.log(`Your app is running on port ${port} : https://localhost:${port}`)
);
