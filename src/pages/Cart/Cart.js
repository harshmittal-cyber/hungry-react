import React from "react";
import style from "./cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    // empty cart container
    <div className={`${style.cart}`}>
      <div className={`${style.cart_container}`}>
        <img
          src="/images/emptycart.jpg"
          alt="emptycart"
          style={{ width: 151, height: 151 }}
        />
        <div className={`${style.text_wrapper}`}>
          <span className={style.text_1}>your cart is empty</span>
          <span className={style.text_2}>
            Please add some items from the menu
          </span>
        </div>
        <div className={`${style.button_wrapper}`}>
          <div className={`${style.button_container}`}>
            <Link to="/menu">
              <button>
                <span>Explore Menu</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
