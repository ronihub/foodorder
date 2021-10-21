import { ItemInCart, ItemInCartProps } from "../../../interfaces/reducer";

// Find specifik item in Cart by its ID
export const findItemInCartByID = (id: number, items_in_cart: ItemInCart[]) => {
  return items_in_cart.find((item) => item.item_id === id);
};
