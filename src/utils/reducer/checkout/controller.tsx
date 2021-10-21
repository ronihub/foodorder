import ItemInCartElement from "../../../components/cart/ItemInCartElement";
import { ItemInCart } from "../../../interfaces/reducer";
import { findItemInCartByID } from "../../functions/cart/cart";

// Function for updating quantity of item in cart
export const updateQuantityOfItemInCart = (
  id: number,
  items_in_cart: ItemInCart[],
  action: string
) => {
  // Create duplicate of items in cart
  let updated_items_in_cart = [...items_in_cart];

  // If item found then update value of quantity
  updated_items_in_cart.forEach((item) => {
    if (item.item_id === id) {
      // Increment
      if (action === "increment") {
        item.item_quantity += 1;
        return;
      }

      // If item quantity is 1 and is to be decremented then remove
      if (item.item_quantity === 1) {
        updated_items_in_cart = updated_items_in_cart.filter(
          (item) => item.item_id !== id
        );

        return;
      }

      // Decrement
      item.item_quantity -= 1;
    }
  });

  // Returning the new updated item
  return updated_items_in_cart;
};
