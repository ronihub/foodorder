import { IonIcon } from "@ionic/react";
import {
  caretBackOutline,
  caretForwardOutline,
  chevronBackOutline,
  gitMerge,
  layers,
  shapes,
  wifi,
} from "ionicons/icons";
import React from "react";
import { FaCreditCard } from "react-icons/fa";
import style from "./_logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={style.logoHolder}>
      <h6>
        <span>Pri</span>
        Sec <IonIcon icon={wifi}></IonIcon>
      </h6>
    </div>
  );
};

export default Logo;
