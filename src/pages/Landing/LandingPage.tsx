import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonCol,
  IonRow,
  IonIcon,
  IonImg,
  IonButtons,
  IonSearchbar,
} from "@ionic/react";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  locateOutline,
  logIn,
  logInOutline,
  mapOutline,
  navigateCircleOutline,
  navigateCircleSharp,
  navigateOutline,
  person,
  personCircle,
  pin,
  pinOutline,
  qrCode,
  qrCodeOutline,
  scan,
  search,
  searchOutline,
} from "ionicons/icons";
import React from "react";
import { IoIosPizza } from "react-icons/Io";
import CategoryCard from "../../components/cards/category/CategoryCard";
import DividerOne from "../../components/dividers/dividerOne";
import style from "./_landingPage.module.scss";
import { FaBeer, FaPizzaSlice } from "react-icons/fa";
import { GiSushis } from "react-icons/gi";
import { categories } from "../../mockdata/categories";
import { title } from "process";
import { restaurant_clients } from "../../mockdata/restaurants";
import RestaurantCard from "../../components/cards/restaurant/RestaurantCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ViewMoreRestaurants from "../../components/cards/casuals/ViewMoreRestaurants";
import ViewMoreRestaurantsCard from "../../components/cards/casuals/ViewMoreRestaurants";
import RestaurantOwnerCard from "../../components/cards/casuals/RestaurantOwnerCard";
import { offersRightNow } from "../../mockdata/onsale";
import RestaurantCardTwo from "../../components/cards/restaurant/RestaurantCardTwo";
import cclogo from "../../../images/cclogo.png";
import swishlogo from "../../../images/swish-logo.svg";
import PaymentIntegrationsHeader from "../../components/headers/PaymentIntegrationsHeader";
import Header from "../../components/headers/Header";
import Logo from "../../components/logo/Logo";
import CollapsibleHeader from "../../components/headers/CollapsibleHeader";
import CartButtonInHeader from "../../components/headers/CartButtonInHeader";

const LandingPage: React.FC = () => {
  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <IonTitle className={style.hideLg}>Hem</IonTitle>
          <IonButtons slot="start">
            <IonButton slot="start">
              <Logo />
            </IonButton>
          </IonButtons>
          <IonButtons className={style.hideLg} slot="end">
            <IonButton>
              <IonIcon
                color="primary"
                icon={qrCodeOutline}
                slot="start"
              ></IonIcon>
            </IonButton>
            <CartButtonInHeader />
          </IonButtons>
          <IonButtons slot="end"></IonButtons>
        </IonToolbar>
      </Header>
      <IonContent fullscreen>
        <CollapsibleHeader>
          <IonSearchbar
            searchIcon={pin}
            className={style.search}
            placeholder="Oslogatan 12, 164 32 Kista"
          >
            <IonIcon slot="start" icon={locateOutline}></IonIcon>
          </IonSearchbar>
        </CollapsibleHeader>
        <div className={`${style.fullscreen} ${style.dFlexCC}`}>
          <div className={style.overlay}></div>
          <div className={`${style.holder} ${style.tAC}`}>
            <h1>Beställ & Betala</h1>
            <p>Beställ och betala direkt från bordet</p>
            <IonGrid>
              <IonList>
                <IonRow>
                  <IonCol sizeXs="12" sizeMd="12" sizeLg="12" sizeXl="4">
                    <IonItem lines="none">
                      <IonInput
                        className={style.white}
                        placeholder="Vad letar du efter..."
                      >
                        <IonIcon slot="end" icon={searchOutline}></IonIcon>
                      </IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol sizeXs="12" sizeMd="12" sizeLg="12" sizeXl="6">
                    <IonItem lines="none">
                      <IonInput
                        className={style.white}
                        placeholder="Adress, område..."
                      >
                        <IonIcon slot="end" icon={navigateOutline}></IonIcon>
                      </IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol
                    className={style.buttonCol}
                    sizeXs="12"
                    sizeMd="12"
                    sizeLg="12"
                    sizeXl="2"
                  >
                    <IonButton color="secondary" expand="full">
                      Sök
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonList>
            </IonGrid>
          </div>
        </div>
        <div className={style.bglight}>
          <div className={style.spacerLg}></div>
          <div className={`${style.container} ${style.categories}`}>
            <div className={`${style.tAC} ${style.fullWidth}`}>
              <DividerOne center={true} />
              <h2>Populära kategorier</h2>
              <p>Bläddra mellan olika kategorier för att hitta er favorit</p>
            </div>
          </div>
          <div className={style.spacerMd}></div>
          <div style={{ paddingTop: 0 }} className={style.container}>
            <IonGrid>
              <IonRow>
                {categories.map((category) => (
                  <IonCol sizeXs="6" sizeMd="4" sizeLg="2.39">
                    <CategoryCard
                      title={category.title}
                      icon={<category.icon />}
                    />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
          <div className={style.spacerLg}></div>
        </div>
        <div className={`${style.container}`}>
          <IonGrid>
            <IonRow>
              <div className={style.spacerLg}></div>
              <IonCol size="12">
                <div className={`${style.headingOne} ${style.fullWidth}`}>
                  <DividerOne center={false} />
                  <h4>Populära restauranger</h4>
                  <p>Bläddra genom populära val</p>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              {restaurant_clients.map((restaurant) => (
                <IonCol sizeXs="12" sizeMd="6" sizeLg="3">
                  <RestaurantCard restaurant={restaurant} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
        <div className={style.spacerLg}></div>
        <div style={{ paddingTop: 0 }} className={style.container}>
          <ViewMoreRestaurantsCard />
        </div>
        <div className={style.spacerLg}></div>
        <div className={style.container}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className={`${style.headingOne} ${style.fullWidth}`}>
                  <DividerOne center={false} />
                  <h4>Heta erbjudanden</h4>
                  <p>HItta erbjudanden som passar dig</p>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              {offersRightNow.map((restaurant) => (
                <IonCol
                  style={{ padding: "10px 10px 10px 5px" }}
                  sizeXs="12"
                  sizeLg="6"
                >
                  <RestaurantCardTwo
                    location={restaurant.location}
                    title={restaurant.title}
                    image={restaurant.image}
                    discount={restaurant.discount}
                    reviewNumber={restaurant.reviewNumber}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
        <div className={style.spacerXl}></div>
        <div className={style.fullWidth}>
          <div className={style.bgimage}>
            <div className={style.container}>
              <IonGrid>
                <IonRow>
                  <IonCol sizeXs="12" sizeLg="6" offsetLg="6">
                    <RestaurantOwnerCard />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
