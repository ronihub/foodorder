import { IonAvatar, IonButton, IonItem } from "@ionic/react";
import React from "react";
import { Product, ProductProps } from "../../../interfaces/restaurant";
import style from "./_restaurantCard.module.scss";
import mangalbg from "../../images/mangal-bg.jpeg";
import { useHistory, useLocation } from "react-router-dom";

const ProductElement: React.FC<ProductProps> = ({ product }) => {
  const history = useHistory();
  const location = useLocation();
  const current_url = useLocation().pathname;

  const navigateToProduct = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    history.push(`${current_url}/${product.product_id}`);
  };
  return (
    <IonItem className={style.productItem} onClick={() => navigateToProduct()}>
      <div className={style.holder}>
        <div className={style.productInfo}>
          <h2>{product.product_title}</h2>
          <p>Nötkött, Tomat, Halloumi, Ost</p>
          <em>
            {product.product_cost},00 <span>SEK</span>
          </em>
        </div>
      </div>
      {product.product_image ? (
        <IonAvatar>
          <img src={product.product_image} />
        </IonAvatar>
      ) : (
        ""
      )}
    </IonItem>
  );
};

export default ProductElement;
