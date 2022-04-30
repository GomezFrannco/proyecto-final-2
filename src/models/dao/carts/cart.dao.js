import { MongoCrud } from "../../crud.models.js";
import { cart } from "../../../modules/cart.modules.js";

class Cart extends MongoCrud {
  constructor(schema) {
    super(schema);
  }
  async removeProduct(cartId, productId) {
    const cart = await this.readOne({ id: cartId });
    const products = cart.products;
    const index = products.indexOf(
      products.find((product) => product.id == productId)
    );
    if (index >= 0) {
      products.splice(index, 1);
    }
    return await this.updateOne({ id: cartId }, cart);
  }
}

export const cartDAO = new Cart(cart);
