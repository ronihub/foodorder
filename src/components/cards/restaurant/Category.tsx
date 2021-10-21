import { IonItem } from "@ionic/react";
import React from "react";
import { CategoryMenuProps } from "../../../interfaces/restaurant";
import Product from "./Product";
import style from "./_restaurantCard.module.scss";

const Category: React.FC<CategoryMenuProps> = ({ title, icon, products }) => {
  const productsElement: any = [];
  products.forEach((product) =>
    productsElement.push(<Product product={product} />)
  );
  return (
    <>
      <div className={style.container}>
        <IonItem lines="none" className={style.categoryItem}>
          <div className={style.itemContainer}>{title}</div>
        </IonItem>
      </div>
      <div className={style.itemContainer}>
        {productsElement.map((el: any) => el)}
      </div>
    </>
  );
};

export default Category;
