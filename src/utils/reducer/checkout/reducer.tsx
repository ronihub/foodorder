import React from "react";
import {
  CheckoutStateProps,
  InitContextProps,
} from "../../../interfaces/reducer";
import kebabtallrik from "../../../images/kebabtallrik.jpg";
import laxfile from "../../../images/laxfile.jpg";
import kycklingspett from "../../../images/kycklingspett.jpg";
import { findItemInCartByID } from "../../functions/cart/cart";
import { updateQuantityOfItemInCart } from "./controller";

// Create global state context for checkout
const CheckoutContext = React.createContext({} as InitContextProps);

// Setting values of global checkout context as initial values
const initialCheckoutContextState: CheckoutStateProps = {
  items_in_cart_from_restaurant_id: 1,
  items_in_cart: [
    {
      item_id: 1,
      item_title: "Kebabtallrik",
      item_quantity: 1,
      item_amount: 120,
      item_image: kebabtallrik,
      item_options: [
        { item_option_title: "Ris" },
        { item_option_title: "Vitlökssås" },
      ],
    },
    {
      item_id: 4,
      item_title: "Laxfile",
      item_quantity: 2,
      item_amount: 140,
      item_image: laxfile,
      item_options: [{ item_option_title: "Potatis" }],
    },
    {
      item_id: 2,
      item_title: "Kycklingspett",
      item_quantity: 1,
      item_amount: 80,
      item_image: kycklingspett,
      item_options: [],
    },
  ],
};

// Reducer for checkout
const checkoutReducer = (state = initialCheckoutContextState, action: any) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        ...action.payload,
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_QUANTITY_OF_ITEM_IN_CART":
      const updated_items_in_cart = updateQuantityOfItemInCart(
        action.payload.item_id,
        state.items_in_cart,
        action.payload.update_type
      );
      return {
        ...state,
        items_in_cart: updated_items_in_cart,
      };
    default:
      return {
        ...state,
      };
  }
};

export { initialCheckoutContextState, checkoutReducer, CheckoutContext };
