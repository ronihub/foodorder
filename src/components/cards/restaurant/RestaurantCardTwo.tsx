import { IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React from "react";
import { RestaurangCardTwoProps } from "../../../interfaces/restaurant";
import style from "./_restaurantCard.module.scss";

const RestaurantCardTwo: React.FC<RestaurangCardTwoProps> = ({
  title,
  image,
  reviewNumber,
  location,
  discount,
}) => {
  return (
    <IonCard className={style.restaurantCardTwo}>
      <div className={style.holder}>
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol style={{ padding: 0 }} sizeXs="12" sizeLg="4">
              <div className={style.imgholder}>
                <IonImg src={image}></IonImg>
              </div>
            </IonCol>
            <IonCol sizeXs="12" sizeLg="8">
              <div className={style.infoHolder}>
                <h6>Italienskt</h6>
                <h5>{title}</h5>
                <p>{location}</p>
                <div className={style.discountHolder}>
                  <span>-{discount}%</span>
                  <p>Ta 3 betala för 2</p>
                </div>
              </div>
              <span className={style.review}>{reviewNumber}</span>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonCard>
  );
};

export default RestaurantCardTwo;
