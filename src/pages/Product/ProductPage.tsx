import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowBackOutline,
  backspaceOutline,
  bagAdd,
  bagAddOutline,
  personCircle,
  restaurant,
  search,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";

import style from "./_product.module.scss";
import { BsFillCartPlusFill } from "react-icons/bs";
import ProductOption from "../../components/cards/restaurant/Option";
import { Product, ProductProps } from "../../interfaces/restaurant";
import { FaOpencart } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import {
  ProductParamsProps,
  RestaurantParamsProps,
} from "../../interfaces/params";
import { findProductByID } from "../../utils/functions/findProduct";
import Header from "../../components/headers/Header";
import BackButton from "../../components/headers/BackButton";

const ProductPage: React.FC = () => {
  // useState holding the current restaurant to be displayed
  const [productToDisplay, setProductToDisplay] = useState<Product | undefined>(
    undefined
  );

  // Gets id of product and restaurant name from url
  const { productid, restauranttitle } = useParams<ProductParamsProps>();

  useEffect(() => {
    // Looks for restaurant based on title received from params
    const productFound = findProductByID(restauranttitle, productid);

    // If found then set the current restaurant to be displayed to found restaurant
    if (productFound !== undefined) {
      setProductToDisplay(productFound);
    }
    console.log(productToDisplay?.product_image);
  }, []);

  return productToDisplay ? (
    <IonPage>
      <Header>
        <IonToolbar>
          <BackButton />
          <IonTitle>{productToDisplay.product_title}</IonTitle>
        </IonToolbar>
      </Header>
      <IonContent>
        <div
          style={{ backgroundImage: `url(${productToDisplay.product_image})` }}
          className={`${style.productFullScreenImg}`}
        ></div>
        <div className={`${style.container} ${style.itemTitleContiainer}`}>
          <div className={`${style.infoHolder}`}>
            <h1>{productToDisplay.product_title}</h1>
            <p>Nötkött, Halloumi, Nötter, Fibrer</p>
            <span className={style.cost}>
              {productToDisplay.product_cost}
              <span>
                .00<em> SEK</em>
              </span>
            </span>
          </div>
        </div>
        {productToDisplay.product_options.map((option) => {
          return <ProductOption option={option} />;
        })}

        <div className={style.optionTitleHolder}>
          <div className={`${style.container} ${style.bglight}`}>
            <div
              style={{ width: "100%" }}
              className={style.optionTitleContainer}
            >
              <p>Övrigt</p>
              <h6>Lämna ett meddelande till oss</h6>
              <IonItem lines="none">
                <IonTextarea clearOnEdit={true}></IonTextarea>
              </IonItem>
              <div className={style.spacerSm}></div>
            </div>
          </div>
        </div>
        <div className={style.spacerLg}></div>

        <div
          className={`${style.container} ${style.nopaddinglr} ${style.fixedPos}`}
        >
          <div className={style.addToCheckoutContainer}>
            <IonButton expand="full" color="primary">
              <div className={style.iconHolder}>
                <FaOpencart />
              </div>
              Lägg till i varukorgen<span>199 SEK</span>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  ) : (
    <IonPage>
      <h1>Något gick fel...</h1>
    </IonPage>
  );
};

export default ProductPage;
