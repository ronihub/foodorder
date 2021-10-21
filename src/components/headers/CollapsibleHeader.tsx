import { IonHeader, IonToolbar } from "@ionic/react";
import React from "react";
import style from "./_headers.module.scss";

const CollapsibleHeader: React.FC = ({ children }) => {
  return (
    <IonHeader collapse="condense" className={style.header}>
      <IonToolbar>{children}</IonToolbar>
    </IonHeader>
  );
};

export default CollapsibleHeader;
