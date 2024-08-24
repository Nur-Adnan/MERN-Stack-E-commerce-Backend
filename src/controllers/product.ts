import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utility-class.js";
import { NewProductRequestBody } from "../types/types.js";
import { rm } from "fs";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductRequestBody>, res, next) => {
    const { name, price, stock, category} = req.body;
    const photo = req.file;

    if (!photo) return next(new ErrorHandler("Please add Photo", 400));

    if (!name || !price || !stock || !category){
        rm(photo.path, ()=> {
            console.log("Deleted");
        })
        return next(new ErrorHandler("Please enter All Fields", 400));
    }
    await Product.create({
      name,
      price,
      stock,
      category: category.toLowerCase(),
      photo: photo.path,
    });
    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
);


// Revalidate on New,Update,Delete Product & on New Order
export const getlatestProducts = TryCatch(async (req, res, next) => {
    let products;

    products = await redis.get("latest-products");

    if (products) products = JSON.parse(products);
    else {
      products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
      await redis.setex("latest-products", redisTTL, JSON.stringify(products));
    }

    return res.status(200).json({
      success: true,
      products,
    });
  });
