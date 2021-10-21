import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowBackOutline,
  chevronForward,
  information,
  informationCircle,
  informationCircleOutline,
  qrCodeOutline,
  restaurant,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import style from "./_trackorder.module.scss";
import fornobg from "../../images/forno-bg.jpg";
import {
  RestaurantClient,
  RestaurantClientCardProps,
} from "../../interfaces/restaurant";
import { restaurant_clients } from "../../mockdata/restaurants";
import { TrackOrderRestaurantElementInListProps } from "../../interfaces/components/cards/trackorder/trackorder";
import Logo from "../../components/logo/Logo";
import Header from "../../components/headers/Header";
import CartButtonInHeader from "../../components/headers/CartButtonInHeader";
import OrderTrackScreen from "../../components/ordertrackscreen/OrderTrackScreen";

const TrackOrderPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantClient[]>();
  const [isTrackOrderModalOpen, setIsTrackOrderModalOpen] = useState(false);

  useEffect(() => {
    setRestaurants(restaurant_clients);
  }, []);

  // Element for restaurant in list
  const TrackOrderRestaurantElement: React.FC<TrackOrderRestaurantElementInListProps> =
    ({ title, image, adress }) => (
      <IonItem onClick={() => setIsTrackOrderModalOpen(true)}>
        <IonAvatar>
          <IonImg src={image}></IonImg>
        </IonAvatar>
        <IonLabel>
          <h2>{title}</h2>
          <h3>{adress}</h3>
        </IonLabel>
        <span>
          <IonIcon icon={chevronForward}></IonIcon>
        </span>
      </IonItem>
    );

  // Funtion for displaying all restaurants in list
  const displayRestaurantElementsInList = () => {
    return restaurants?.map((restaurant) => (
      <TrackOrderRestaurantElement
        title={restaurant.restaurant_name}
        image={restaurant.cover_image}
        adress={restaurant.restaurant_location}
      />
    ));
  };

  // Modal for live view of tracking order
  const OrderTrackScreenModal: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
      <IonModal
        swipeToClose={true}
        showBackdrop={true}
        isOpen={isTrackOrderModalOpen}
      >
        <Header>
          <IonToolbar>
            <IonTitle>Live spårning</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsTrackOrderModalOpen(false)}>
                Stäng
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </Header>
        <IonContent>
          <div className={style.bgImage}>
            <div className={style.overlay} />
            <OrderTrackScreen />
          </div>
        </IonContent>
      </IonModal>
    );
  };

  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={informationCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon
                color="primary"
                icon={qrCodeOutline}
                slot="start"
              ></IonIcon>
            </IonButton>
            <CartButtonInHeader />
          </IonButtons>
          <IonTitle>Spåra order</IonTitle>
        </IonToolbar>
      </Header>
      <IonContent>
        <IonHeader className={style.firstlyVisibleHeader} collapse="condense">
          <IonToolbar>
            <div className={style.container}>
              <div className={style.trackOrderSearchHeader}>
                <h2>Spåra din order</h2>
                <p>Hitta din restaurang och ange din orderID</p>
                <div className={style.trackOrderSearchBarHolder}>
                  <IonSearchbar
                    enterkeyhint="enter"
                    inputMode="search"
                  ></IonSearchbar>
                </div>
              </div>
            </div>
            <div className={`${style.container} ${style.btnHolder}`}>
              <IonButton
                className={style.extraButtonInToolbar}
                color="secondary"
                fill="clear"
              >
                Glömt ditt orderID?
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className={style.container}>
          <IonList className={style.trackOrderList}>
            {displayRestaurantElementsInList()}
          </IonList>
        </div>
        <OrderTrackScreenModal isOpen={isTrackOrderModalOpen} />
      </IonContent>
    </IonPage>
  );
};

export default TrackOrderPage;
