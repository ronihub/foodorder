import React from "react";
import { DividerOneProps } from "../../interfaces/components/dividers";
import style from "./_divider.module.scss";

const DividerOne: React.FC<DividerOneProps> = ({ center }) => {
  const isCenter = () => (center ? style.center : "");

  return (
    <div className={`${style.dividerOne} ${isCenter()}`}>
      <span className={`${isCenter()}`}>
        <em></em>
      </span>
    </div>
  );
};

export default DividerOne;
