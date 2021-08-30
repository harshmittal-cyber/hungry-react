import React from "react";
import style from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={`${style.button} root_button`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
