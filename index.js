import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes usage
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.ATLAS_URI,
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
