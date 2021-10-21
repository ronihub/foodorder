import { IonCard, IonCardContent, IonCardHeader, IonTitle } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { OrderToBeTrackedProps } from "../../../interfaces/orders";
import { OrdersToBeTrackedParamsProps } from "../../../interfaces/params";
import { RestaurantTrackOrderCardProps } from "../../../interfaces/restaurant";
import { findRestaurantByTitle } from "../../../utils/functions/findRestaurant";
import style from "./_trackorder.module.scss";

const TrackOrderRestaurantCard: React.FC<RestaurantTrackOrderCardProps> = ({
  restaurant_id,
}) => {
  // Holding orders that are to be displayed in the ordertracker
  const [currentOrders, setCurrentOrders] = useState<OrderToBeTrackedProps>();

  // Get the restaurant from params
  const { restaurant_pathname } = useParams<OrdersToBeTrackedParamsProps>();

  useEffect(() => {
    // Dont even need to comment this
    const restaurant = findRestaurantByTitle(restaurant_pathname);

    if (restaurant) {
    }
  }, []);

  return (
    <IonCard className={style.trackOrderRestaurantCard}>
      <IonCardHeader>
        <IonTitle></IonTitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
  );
};

export default TrackOrderRestaurantCard;
