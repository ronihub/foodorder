import { IonButton, IonIcon, IonPopover } from "@ionic/react";
import { bag, bagHandle, bagOutline, cart, cartOutline } from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { ItemInCart } from "../../interfaces/reducer";
import { CheckoutContext } from "../../utils/reducer/checkout/reducer";
import CartPopover from "../cart/CartPopover";
import style from "./_headers.module.scss";

const CartButtonInHeader: React.FC = () => {
  const { checkout_state, checkout_dispatch } = useContext(CheckoutContext);

  // state for showing cart popover
  const [popoverState, setShowPopover] = useState<{
    showPopover: boolean;
    event: any;
  }>({
    showPopover: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        showBackdrop={true}
        cssClass={style.cartPopover}
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <CartPopover />
      </IonPopover>
      <IonButton
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
        className={style.cartIconBtn}
        color="primary"
      >
        <IonIcon icon={cartOutline} />
        <span className={style.itemsInCartIndicator}>
          {checkout_state.items_in_cart.length}
        </span>
      </IonButton>
    </>
  );
};

export default CartButtonInHeader;
