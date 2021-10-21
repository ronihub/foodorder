import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import { CategoryProps } from "../../../interfaces/restaurant";
import style from "./_categoryCard.module.scss";

const CategoryCard: React.FC<CategoryProps> = ({ title, icon }) => {
  return (
    <IonCard className={style.categoryCard}>
      <IonCardContent>
        <span>87</span>
        <div>{icon}</div>
        <h4>{title}</h4>
        <p>Bläddra bland 87</p>
      </IonCardContent>
    </IonCard>
  );
};

export default CategoryCard;
