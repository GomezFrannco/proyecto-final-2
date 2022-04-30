import { MongoCrud } from "../../crud.models.js";
import { product } from "../../../modules/product.modules.js";

class Products extends MongoCrud {
  constructor(schema) {
    super(schema);
  }
}

export const productDAO = new Products(product);
