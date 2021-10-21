import {
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import { options } from "ionicons/icons";
import { title } from "process";
import React, { useState } from "react";
import { Option, OptionProps } from "../../../interfaces/restaurant";
import style from "./_elements.module.scss";

const ProductOption: React.FC<OptionProps> = ({ option }) => {
  const [selected, setSelected] = useState<string>("");

  const RadioButtonElement: React.FC<Option> = ({ title, price }) => {
    return (
      <IonItem lines="none">
        <IonLabel>{title}</IonLabel>
        <IonRadio slot="start" value={title} />
      </IonItem>
    );
  };

  const MultiOptionButtonElement: React.FC<Option> = ({ title, price }) => {
    return (
      <IonItem lines="none">
        <IonLabel>{title}</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    );
  };

  const displayOptionELements = (title: string) => {
    const optionTitle = title;
    let undertext = "";
    if (
      option.obligatory.isObligatory &&
      option.obligatory.numbOfOptionsToBeObligatory >= 1
    ) {
      undertext = "Obligatoriskt";
    } else if (
      option.obligatory.isObligatory &&
      option.obligatory.numbOfOptionsToBeObligatory > 1
    ) {
      undertext = `Välj ${option.obligatory.numbOfOptionsToBeObligatory}`;
    } else if (!option.obligatory.isObligatory && option.obligatory.maxLimit) {
      undertext = `Välj max ${option.obligatory.maxLimit}`;
    } else if (!option.obligatory.isObligatory && !option.isFree) {
      undertext = "";
    }
    return (
      <>
        <div className={style.optionTitleHolder}>
          <div className={`${style.container} ${style.bglight} `}>
            <div className={style.optionTitleContainer}>
              <p>{option.option_title}</p>
              <h6 className={style.undertext}>{undertext}</h6>
            </div>
          </div>
        </div>
        <div className={style.optionsHolder}>
          <div className={`${style.container} ${style.nopaddinglr}`}>
            <IonList>
              {option.options.map((option) => (
                <MultiOptionButtonElement
                  title={option.title}
                  price={option.price}
                />
              ))}
            </IonList>
          </div>
        </div>
      </>
    );
  };

  return <div className={style.option}>{displayOptionELements(title)}</div>;
};

export default ProductOption;
