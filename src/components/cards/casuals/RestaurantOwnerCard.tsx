import { IonButton, IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import style from "./_casuals.module.scss";

const RestaurantOwnerCard: React.FC = () => {
  return (
    <IonCard className={style.restaurantOwnerCard}>
      <IonCardContent>
        <h2>
          Är du restaurang <br />
          ägare?
        </h2>
        <p>
          Registrera dig hos oss för att erbjuda era kunder den smidigaste
          betalningsplattformen som finns idag. Minska era köer & öka er
          försäljning.
        </p>
        <IonButton color="secondary" className={style.primaryBtn}>
          Kom Igång
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default RestaurantOwnerCard;
