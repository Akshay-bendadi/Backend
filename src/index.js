import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("error:", error);
    });
    console.log(`Server is running on`);
  })
  .catch((err) => {
    console.log(`MOngoDB connection Failed`);
  });
