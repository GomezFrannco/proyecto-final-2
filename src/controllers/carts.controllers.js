import "../config/mongodb.config.js";
import { cartDAO } from "../models/dao/carts/cart.dao.js";
import { productDAO } from "../models/dao/products/product.dao.js";
import { setID } from "./id.controllers.js";

export async function setCart(_req, res) {
  let cart = {
    products: [],
    id: await setID(cartDAO),
  };
  const set = await cartDAO.create(cart);
  return res.json({
    message: "Cart created",
  });
}
export async function setProduct(req, res) {
  const { cartId, productId } = req.params;
  const product = await productDAO.readOne({ id: productId });
  const cart = await cartDAO.readOne({ id: cartId });
  cart.products.push(product);
  const set = await cartDAO.updateOne({ id: cartId }, cart);
  return res.json({
    message: "Product added",
  });
}
export async function getCart(req, res) {
  const id = req.params.id;
  const get = await cartDAO.readOne({ id: id });
  return res.json(get.products);
}
export async function deleteProduct(req, res) {
  const { cartId, productId } = req.params;
  const removed = await cartDAO.removeProduct(cartId, productId);
  return res.json({
    message: "Product removed",
  });
}
export async function deleteCart(req, res) {
  const id = req.params.id;
  const deleted = await cartDAO.deleteOne({ id: id });
  return res.json({
    message: "Cart deleted",
  });
}
