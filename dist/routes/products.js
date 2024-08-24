import express from "express";
import { newProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
//To Create New Product  - /api/v1/product/new
app.post("/new", singleUpload, newProduct);
export default app;
