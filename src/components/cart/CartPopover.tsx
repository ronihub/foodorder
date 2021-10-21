import { IonButton, IonIcon, IonItem, IonList } from "@ionic/react";
import { arrowForward, chevronForward } from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { ItemInCart } from "../../interfaces/reducer";
import { CheckoutContext } from "../../utils/reducer/checkout/reducer";
import ItemInCartElement from "./ItemInCartElement";
import style from "./_cart.module.scss";

const CartPopover: React.FC = () => {
  const [itemsInCart, setitemsInCart] = useState<ItemInCart[]>();
  const { checkout_state, checkout_dispatch } = useContext(CheckoutContext);

  // Sets the items in cart from the reducer and re-renders when checkout_state changes
  useEffect(() => {
    setitemsInCart(checkout_state.items_in_cart);
  }, [checkout_state]);

  // Loop throught and display all items in cart
  const displayitemsInCart = () => {
    return itemsInCart?.map((item) => (
      <ItemInCartElement item_in_cart={item} />
    ));
  };

  // Get total price of items in cart
  const getTotal = () => {
    let total = 0;
    itemsInCart?.forEach(
      (item) => (total += item.item_quantity * item.item_amount)
    );
    return total;
  };

  return (
    <div className={style.cartPopover}>
      <div className={style.header}>
        <h3>Forno Romano</h3>
        <p>Oslogatan 12, 164 32 Kista</p>
      </div>
      <IonList className={style.itemsInCartList}>
        {displayitemsInCart()}
      </IonList>
      <IonItem lines="none">
        <div className={style.cartTotal}>
          <h6>TOTALT</h6>
          <span>{getTotal()}.00KR</span>
        </div>
      </IonItem>
      <IonButton
        className={style.goToCheckoutBtn}
        expand="full"
        fill="solid"
        color="primary"
      >
        Till kassan
        <IonIcon slot="end" icon={arrowForward}></IonIcon>
      </IonButton>
    </div>
  );
};

export default CartPopover;
