import { ProductProps } from "./restaurant";

export interface OrderToBeTrackedProps {
  order_id: number;
  restaurant_pathname: string;
}

export interface OrderPlaced {
  order_id: number;
  restaurant_pathname: string;
  amount: number;
  // date order placed
  products: ProductProps[];
  payment_method: string;
  take_away: boolean;
  status: string;
}
