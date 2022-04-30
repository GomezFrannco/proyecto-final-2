import "../config/mongodb.config.js";
import { productDAO } from "../models/dao/products/product.dao.js";
import { setID } from "./id.controllers.js";

export async function getProducts(_req, res) {
  const read = await productDAO.readAll();
  if (read.length !== 0) {
    return res.json(read);
  } else {
    return res.json({
      message: "No products yet",
    });
  }
}
export async function getProductById(req, res) {
  const id = req.params.id;
  const read = await productDAO.readOne({ id: id });
  if (read !== null) {
    return res.json(read);
  } else {
    return res.json({
      message: "No products founded",
    });
  }
}
export async function setProducts(req, res) {
  const product = req.body;
  product.id = await setID(productDAO);
  const set = await productDAO.create(product);
  return res.json({
    message: "Product saved successfully",
  });
}
export async function updateProduct(req, res) {
  const id = req.params.id;
  const update = req.body;
  const oldProduct = await productDAO.updateOne({ id: id }, update);
  return res.json({
    message: "Product updated",
  });
}
export async function deleteProduct(req, res) {
  const id = req.params.id;
  const deleted = await productDAO.deleteMany({ id: id });
  return res.json({
    message: "deleted",
  });
}
