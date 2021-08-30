import React from "react";
import style from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={`${style.card} shadow-lg`}>
      <div className={style.headingContainer}>
        <div className={style.heading}>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Card;
