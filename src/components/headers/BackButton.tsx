import { IonButtons, IonBackButton } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React from "react";

const BackButton: React.FC = () => {
  return (
    <IonButtons slot="start">
      <IonBackButton
        color="dark"
        defaultHref="/"
        text=""
        icon={arrowBackOutline}
      />
    </IonButtons>
  );
};

export default BackButton;
