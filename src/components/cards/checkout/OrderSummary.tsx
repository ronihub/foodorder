import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTextarea,
  IonToggle,
} from "@ionic/react";
import React from "react";
import style from "./_checkout.module.scss";

const OrderSummary: React.FC = () => {
  return (
    <IonCard className={style.orderSummaryCard}>
      <IonCardHeader>
        <IonCardTitle>Order Summary</IonCardTitle>
        <IonLabel>
          <p>Oslogatan 12, 164 32 Kista</p>
        </IonLabel>
      </IonCardHeader>
      <IonCardContent>
        <div className={style.spacerSm}></div>
        <IonList className={style.orderSummaryList}>
          <IonLabel>
            <p>
              Datum <span>idag 29/09/2021</span>
            </p>
            <p>
              Ta med
              <span>
                <IonCheckbox color="secondary" checked={true} />
              </span>
            </p>
            <p>
              Serveringstyp<span>kund hämtar</span>
            </p>
          </IonLabel>
          <div className={style.spacerSm}></div>
          <div className={style.divider}></div>
          <div className={style.spacerSm}></div>

          <IonLabel>
            <p>
              Adana Kebab
              <span>109:-</span>
            </p>
            <p>
              Kebabtallrik
              <span>89:-</span>
            </p>
            <p>
              Coca Cola Zero
              <span>19:-</span>
            </p>
          </IonLabel>
          <div className={style.spacerLg}></div>
          <IonLabel>
            <p>
              rabattkod <span>*</span>
            </p>
            <p style={{ fontWeight: 600, fontSize: "1rem" }}>
              Totalt{" "}
              <span style={{ fontWeight: 600, fontSize: "1rem" }}>329:-</span>
            </p>
          </IonLabel>
        </IonList>
        <div className={style.spacerSm}></div>
      </IonCardContent>
      <div className={style.bottomPart}>
        <IonItem lines="none">
          <IonInput
            type="text"
            style={{ height: "100%" }}
            className={style.checkout}
            placeholder="Rabattkod.."
          ></IonInput>
          <IonButton className={style.couponBtn} fill="solid" color="secondary">
            Tillämpa
          </IonButton>
        </IonItem>
        <div className={style.spacerSm}></div>
        <IonItem lines="none">
          <IonTextarea
            rows={4}
            className={style.checkoutLeaveMessage}
            placeholder="Lämmna meddelande till oss ..."
          ></IonTextarea>
        </IonItem>
      </div>
    </IonCard>
  );
};

export default OrderSummary;
