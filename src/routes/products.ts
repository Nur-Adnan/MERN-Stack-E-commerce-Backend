import express from "express";
import {getlatestProducts, newProduct} from "../controllers/product.js";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

//To Create New Product  - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

//To get last 10 Products  - /api/v1/product/latest
app.get("/latest", getlatestProducts);

export default app;
