import React from "react";
import style from "./TextInput.module.css";

const Input = (props) => {
  return (
    <div className={`${style.input_container}`}>
      <input className={`${style.input}`} type="text" {...props} />
    </div>
  );
};

export default Input;
