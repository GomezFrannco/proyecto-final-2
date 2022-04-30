import { Router } from "express";
import {
  setCart,
  setProduct,
  getCart,
  deleteCart,
  deleteProduct,
} from "../controllers/carts.controllers.js";
const cartRouter = Router();

cartRouter.route("/carrito").post(setCart);
cartRouter.route("/carrito/:id").delete(deleteCart);
cartRouter.route("/carrito/:id/productos").get(getCart);
cartRouter
  .route("/carrito/:cartId/productos/:productId")
  .post(setProduct)
  .delete(deleteProduct);

export default cartRouter;
