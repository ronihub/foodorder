import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonIcon,
  IonButton,
  IonSearchbar,
} from "@ionic/react";
import { arrowBackOutline, cart } from "ionicons/icons";
import React from "react";
import { HeaderProps } from "../../interfaces/components/headers";
import Logo from "../logo/Logo";
import CartButtonInHeader from "./CartButtonInHeader";
import style from "./_headers.module.scss";

const Header: React.FC = ({ children }) => {
  return (
    <IonHeader className={`${style.header} ${style.headerOne}`}>
      {children}
    </IonHeader>
  );
};

export default Header;
