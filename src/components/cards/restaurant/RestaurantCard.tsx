import { IonCard, IonCardContent, IonImg } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { RestaurantClientCardProps } from "../../../interfaces/restaurant";
import style from "./_restaurantCard.module.scss";

const RestaurantCard: React.FC<RestaurantClientCardProps> = ({
  restaurant,
}) => {
  const history = useHistory();
  const navigateToUrl = () => {
    history.push(`/restaurang/${restaurant.urlpath}`);
  };

  return (
    <IonCard onClick={() => navigateToUrl()} className={style.restaurantCard}>
      <IonCardContent>
        <div
          style={{ backgroundImage: `url(${restaurant.cover_image})` }}
          className={style.holder}
        >
          <div className={style.overlay}></div>
          <div className={style.labelHolder}>
            <span className={style.categoryLabel}>Pizza</span>
            <span className={style.discountLabel}>-15%</span>
          </div>
          <div className={style.infoHolder}>
            <h5>{restaurant.restaurant_name}</h5>
            <p>{restaurant.restaurant_location}</p>
          </div>
        </div>
        <div className={style.extraInfoHolder}>
          <span className={style.openinghours}>Stänger 21</span>
          <div className={style.reviewsHolder}>
            <div>
              <h6>Superb</h6>
              <p>350 reviews</p>
            </div>
            <span className={style.reviews}>8.2</span>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default RestaurantCard;
