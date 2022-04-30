import { Router } from "express";
import { getProducts, getProductById, setProducts, updateProduct, deleteProduct } from "../controllers/products.controllers.js";
const productRouter = Router()

productRouter.route('/productos')
  .get(getProducts)
  .post(setProducts)
productRouter.route('/productos/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct)

export default productRouter