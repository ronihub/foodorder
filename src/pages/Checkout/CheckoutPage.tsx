import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowBackOutline,
  arrowForwardCircle,
  chatbox,
  create,
  createOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  share,
} from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import OrderSummary from "../../components/cards/checkout/OrderSummary";
import fornobg from "../../images/forno-bg.jpg";
import {
  ItemInCart,
  ItemInCartOptions,
  ItemInCartProps,
} from "../../interfaces/reducer";
import { CheckoutContext } from "../../utils/reducer/checkout/reducer";
import style from "./_checkout.module.scss";
import cclogo from "../../images/cclogo.png";
import swishlogo from "../../images/swish-logo.png";
import Header from "../../components/headers/Header";

const CheckoutPage: React.FC = () => {
  const { checkout_state, checkout_dispatch } = useContext(CheckoutContext);
  const [totalPrice, setTotalPrice] = useState<Number>();

  // Set total price of shopping cart from context api
  useEffect(() => {
    let total = 0;
    checkout_state.items_in_cart.forEach(
      (item) => (total += item.item_amount * item.item_quantity)
    );
    setTotalPrice(total);
  }, []);

  // Element for Options chosen for each item added to cart
  const OptionElement: React.FC<ItemInCartOptions> = ({
    item_option_title,
  }) => <p className={style.itemInCartOption}>{item_option_title}</p>;

  // Element for a item added to cart
  const ItemElement: React.FC<ItemInCartProps> = ({ item_in_cart }) => {
    const displayOptions = () => {
      return item_in_cart.item_options.map((option) => (
        <OptionElement item_option_title={option.item_option_title} />
      ));
    };
    return (
      <IonItem lines="none">
        <div>
          <h3>{item_in_cart.item_title}</h3>
          {displayOptions()}
        </div>
        <span>
          {item_in_cart.item_quantity * item_in_cart.item_amount}
          <em>.00 SEK</em>
        </span>
      </IonItem>
    );
  };

  // Loops through items in cart and displays them
  const displayItemsInCart = () => {
    return checkout_state.items_in_cart.map((item) => (
      <ItemElement item_in_cart={item} />
    ));
  };

  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={createOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Checkout - Forno Romano</IonTitle>
        </IonToolbar>
      </Header>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <div className={style.container}>
              <div className={style.condenseHeader}>
                <IonAvatar>
                  <IonImg src={fornobg}></IonImg>
                </IonAvatar>
                <div className={style.infoHolder}>
                  <h3>Forno Romano</h3>
                  <p>Oslogatan 12, 164 32 Kista</p>
                </div>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className={style.fullWidth}>
          <div className={`${style.bgImage}`}>
            <div className={style.overlay}></div>
            <div className={style.container}>
              <IonGrid>
                <IonRow>
                  <IonCol style={{ padding: 0 }} sizeXs="12" sizeLg="5">
                    <OrderSummary />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
        </div>
        <IonFab
          className={style.fabButtonHolder}
          vertical="bottom"
          horizontal="end"
          slot="fixed"
        >
          <IonFabButton>
            <IonLabel>
              Betala
              <em>
                {totalPrice}
                <span>.00SEK</span>
              </em>
            </IonLabel>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonImg src={cclogo}></IonImg>
            </IonFabButton>
            <IonFabButton>
              <IonImg src={swishlogo}></IonImg>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CheckoutPage;
