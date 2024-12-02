// type 1

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
connectDB();

// Type 2

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import { express } from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error", error);
//     throw error;
//   }
// })();
