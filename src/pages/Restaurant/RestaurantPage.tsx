import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { url } from "inspector";
import {
  arrowBackOutline,
  call,
  camera,
  images,
  phonePortrait,
  restaurant,
  time,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FeaturedProductCard from "../../components/cards/restaurant/FeaturedProductCard";
import DividerOne from "../../components/dividers/dividerOne";
import BackButton from "../../components/headers/BackButton";
import Header from "../../components/headers/Header";
import PaymentIntegrationsHeader from "../../components/headers/PaymentIntegrationsHeader";
import OrderMenu from "../../components/ordermenu/OrderMenu";
import { RestaurantParamsProps } from "../../interfaces/params";
import {
  RestaurantClient,
  RestaurantClientCardProps,
  RestaurantPageProps,
} from "../../interfaces/restaurant";
import { findRestaurantByTitle } from "../../utils/functions/findRestaurant";

import style from "./_restaurant.module.scss";

const RestaurantPage: React.FC = () => {
  // useState holding the current restaurant to be displated
  const [restaurantToDisplay, setRestaurantToDisplay] = useState<
    RestaurantClient | undefined
  >(undefined);

  // Gets title of restaurant from params
  const { restauranttitle } = useParams<RestaurantParamsProps>();

  useEffect(() => {
    // Looks for restaurant based on title received from params
    const restaurantFound = findRestaurantByTitle(restauranttitle);

    // If found then set the current restaurant to be displayed to found restaurant
    if (restaurantFound !== undefined) {
      setRestaurantToDisplay(restaurantFound);
    }
  }, []);

  if (restaurantToDisplay !== undefined) {
    return (
      <IonPage>
        <Header>
          <IonToolbar>
            <BackButton />
            <IonTitle>{restaurantToDisplay.restaurant_name}</IonTitle>
          </IonToolbar>
        </Header>
        <IonContent>
          <PaymentIntegrationsHeader />
          <div
            style={{
              backgroundImage: `url(${restaurantToDisplay.cover_image})`,
            }}
            className={style.fullscreen}
          >
            <div className={style.overlayDarker}></div>
            <div
              style={{ flexDirection: "row" }}
              className={`${style.container} ${style.nopaddingtb}`}
            >
              <IonGrid>
                <IonRow className={`${style.rowInfoHolder}`}>
                  <IonCol
                    sizeXs="12"
                    sizeLg="4"
                    className={`${style.nopaddinglr}`}
                  >
                    <div className={style.holder}>
                      <div className={style.reviewHolder}>
                        <span>{8.2}</span>
                        <em>129 omdömen</em>
                      </div>
                      <div className={style.infoHolder}>
                        <h1>{restaurantToDisplay.restaurant_name}</h1>
                        <h4>
                          {restaurantToDisplay.restaurant_location} -{" "}
                          <a href="">Hitta hit</a>
                        </h4>
                      </div>
                    </div>
                  </IonCol>
                  <IonCol
                    sizeXs="12"
                    sizeLg="8"
                    className={`${style.nopaddinglr}`}
                  >
                    <div className={style.btnHolder}>
                      <IonButton
                        style={{ marginRight: "10px" }}
                        className={style.seeImagesBtn}
                      >
                        <IonIcon icon={time} slot="start"></IonIcon>
                        Stänger 21:30
                      </IonButton>
                      <IonButton className={style.seeImagesBtn}>
                        <IonIcon icon={call} slot="start"></IonIcon>
                        Ring oss
                      </IonButton>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div className={style.spacerLg}></div>
          <div className={style.container}>
            <div className={`${style.headingOne} ${style.fullWidth}`}>
              <DividerOne center={false}></DividerOne>
              <h4>Utvalda produkter</h4>
              <p>Restaurangen rekommenderar dessa rätter</p>
              <IonGrid className={style.nopaddinglr}>
                <IonRow
                  className={`${style.nopaddinglr} ${style.rowInfoHolder} ${style.verticalScroll}`}
                >
                  <IonCol
                    className={style.firstCol}
                    sizeXs="11"
                    sizeMd="6"
                    sizeLg="4"
                  >
                    <FeaturedProductCard />
                  </IonCol>
                  <IonCol sizeXs="11" sizeMd="6" sizeLg="4">
                    <FeaturedProductCard />
                  </IonCol>
                  <IonCol
                    className={style.nopaddingr}
                    sizeXs="11"
                    sizeMd="6"
                    sizeLg="4"
                  >
                    <FeaturedProductCard />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div className={style.spacerSm}></div>
          <div className={style.spacerMd}></div>
          <OrderMenu restaurant={restaurantToDisplay} />
        </IonContent>
      </IonPage>
    );
  } else return <h1>Kunde inte hitta sidan..</h1>;
};

export default RestaurantPage;
