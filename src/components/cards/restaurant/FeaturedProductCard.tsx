import { IonCard, IonCardContent, IonContent, IonImg } from "@ionic/react";
import { url } from "inspector";
import React from "react";
import style from "./_restaurantCard.module.scss";
import mangal from "../../../images/mangal-bg.jpeg";

const FeaturedProductCard: React.FC = () => {
  return (
    <IonCard className={style.featuredProductCard}>
      <div className={style.imgholder}>
        <span className={style.recommended}>Rekommenderad</span>

        <IonImg src={mangal}></IonImg>
        <div className={style.overlay}></div>
      </div>
      <div className={style.infoHolder}>
        <div>
          <h5>Kebabtallrik</h5>
          <em>Nötkött, Sallad, Gluten</em>
        </div>
        <span>120,00 :-</span>
      </div>
    </IonCard>
  );
};

export default FeaturedProductCard;
