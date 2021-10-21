import { IonAvatar, IonButton, IonImg, IonItem } from "@ionic/react";
import React, { useContext } from "react";
import { ProductInCartProps } from "../../interfaces/cart";
import { ItemInCartProps } from "../../interfaces/reducer";
import { CheckoutContext } from "../../utils/reducer/checkout/reducer";
import style from "./_cart.module.scss";

const ItemInCartElement: React.FC<ItemInCartProps> = ({ item_in_cart }) => {
  const { checkout_state, checkout_dispatch } = useContext(CheckoutContext);

  // update quantity of item in cart
  const updateQuantityOfItemInCart = (type: string) => {
    checkout_dispatch({
      state: checkout_state,
      type: "UPDATE_QUANTITY_OF_ITEM_IN_CART",
      payload: { item_id: item_in_cart.item_id, update_type: type },
    });
  };

  return (
    <IonItem className={style.itemInCart}>
      <div
        className={`${style.dFlexCol} ${style.fullWidth} ${style.itemInCartHolder}`}
      >
        <div className={`${style.dFlexCC} ${style.fullWidth}`}>
          <div
            className={`${style.dFlexRow} ${style.dFlexAICJCSB} ${style.fullWidth}`}
          >
            <IonAvatar>
              <IonImg
                src={
                  item_in_cart.item_image ? item_in_cart.item_image : undefined
                }
              ></IonImg>
            </IonAvatar>
            <div className={style.dFlexCol}>
              <div className={style.infoHolder}>
                <h3>{item_in_cart.item_title}</h3>
                <p>{item_in_cart.item_amount}.00SEK</p>
              </div>
              <div className={style.quantityHolder}>
                <IonButton
                  onClick={() => updateQuantityOfItemInCart("decrement")}
                  color="light"
                  fill="solid"
                >
                  -
                </IonButton>
                <span>{item_in_cart.item_quantity}</span>
                <IonButton
                  onClick={() => updateQuantityOfItemInCart("increment")}
                  color="light"
                  fill="solid"
                >
                  +
                </IonButton>
              </div>
            </div>
          </div>
        </div>
        <span className={style.totalPerProduct}>
          <em>
            {item_in_cart.item_amount * item_in_cart.item_quantity}
            <span>.00SEK</span>
          </em>
        </span>
      </div>
    </IonItem>
  );
};

export default ItemInCartElement;
