import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

// check auth connect to DB
try {
  await db.authenticate();
  console.log("Database Connected...");
  // generate db new table
  // await Users.sync();
} catch (error) {
  console.error(error);
}

// route API
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

//CHECK CONNECT TO PORT
app.listen(5000, () => console.log("Server Running at Port 5000."));
