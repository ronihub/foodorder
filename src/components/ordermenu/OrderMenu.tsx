import { IonList } from "@ionic/react";
import React, { useState } from "react";
import {
  RestaurantClient,
  RestaurantClientCardProps,
  RestaurantPageProps,
} from "../../interfaces/restaurant";
import Category from "../cards/restaurant/Category";

const OrderMenu: React.FC<RestaurantClientCardProps> = ({ restaurant }) => {
  const [orderMenu, setOrderMenu] = useState(restaurant.categories);
  const orderMenuToBeDisplayed: JSX.Element[] = [];
  orderMenu.forEach((category) => {
    orderMenuToBeDisplayed.push(
      <Category title={category.title} products={category.products} />
    );
  });

  return <IonList>{orderMenuToBeDisplayed.map((el) => el)}</IonList>;
};

export default OrderMenu;
