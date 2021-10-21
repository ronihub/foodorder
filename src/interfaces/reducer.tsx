import { Dispatch } from "react";

export interface Actions {
  state: any;
  type: string;
  payload?: any;
}

export interface CheckoutStateProps {
  items_in_cart: ItemInCart[];
  items_in_cart_from_restaurant_id?: number;
}

export interface ItemInCart {
  item_id: number;
  item_title: string;
  item_quantity: number;
  item_amount: number;
  item_options: ItemInCartOptions[];
  item_image?: any;
}

export interface ItemInCartOptions {
  item_option_title: string;
}

export interface ItemInCartProps {
  item_in_cart: ItemInCart;
}

export interface InitContextProps {
  checkout_state: CheckoutStateProps;
  checkout_dispatch: Dispatch<Actions>;
}
