import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonItemDivider,
  IonRow,
} from "@ionic/react";
import React from "react";
import fornobg from "../../images/forno-bg.jpg";
import style from "./_orderTrackScreen.module.scss";

const OrderTrackScreen: React.FC = () => {
  return (
    <IonCard className={style.orderTrackScreenCard}>
      <IonCardHeader>
        <div className={style.dFlexAIC}>
          <IonAvatar>
            <IonImg src={fornobg}></IonImg>
          </IonAvatar>
          <div>
            <IonCardTitle>Forno Romano</IonCardTitle>
            <p>Oslogatan 12, 164 32 Kista </p>
          </div>
        </div>
        <div className={style.blob}></div>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol className={style.readyOrders} sizeXs="6" sizeLg="6">
              <p>Order färdig</p>
              <IonRow>
                <span className={style.order}>0011</span>
                <span className={style.order}>0013</span>
                <span className={style.order}>1211</span>
                <span className={style.order}>2219</span>
              </IonRow>
            </IonCol>
            <IonCol sizeXs="6" sizeLg="6">
              <p>Order tillagas</p>
              <IonRow>
                <span className={style.order}>5211</span>
                <span className={style.order}>0211</span>
                <span className={style.order}>0211</span>
                <span className={style.order}>3251</span>
                <span className={style.order}>9214</span>
                <span className={style.order}>3321</span>
                <span className={style.order}>1241</span>
                <span className={style.order}>0211</span>
                <span className={style.order}>0211</span>
                <span className={style.order}>3251</span>
                <span className={style.order}>9214</span>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default OrderTrackScreen;
