import { IonButton, IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import PaymentIntegrationsHeader from "../../headers/PaymentIntegrationsHeader";
import style from "./_casuals.module.scss";

const ViewMoreRestaurantsCard: React.FC = () => {
  return (
    <IonCard className={style.viewMoreRestaurantsCard}>
      <div className={style.overlay}></div>
      <IonCardContent>
        <div className={style.holder}>
          <h3>Scanna och Betala direkt från bordet</h3>
          <h4>Slipp köer & krångel</h4>
          <IonButton color="secondary" expand="block">
            Visa mer
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ViewMoreRestaurantsCard;
