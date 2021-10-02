import React from "react";
import style from "./cartitem.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CartItem = (props) => {
  const { name, price, quantity, image, description } = props.cartitem;
  const { onDeleteProduct, onIncreaseQuantity, onDecreaseQuantity } = props;

  const getItemTotal = (qty, price1) => {
    let total = 0;
    total = total + qty * price1;
    return total;
  };

  return (
    <div className={` ${style.itemclass}`}>
      <div className={`flex ${style.cartItemWrapper}`}>
        <div className={`${style.cartitem_left}`}>
          <div
            className={`${style.item_image}`}
            style={{ width: 112, height: 112 }}
          >
            <LazyLoadImage
              src={`${process.env.REACT_APP_API_URL}${image}`}
              className={`${style.item_img}`}
              alt="item-image"
            />
          </div>
        </div>
        <div className={`${style.cartitem_right}`}>
          <div className={`col-12-12`}>
            <span className={`${style.item_name}`}>{name}</span>
            <span className={`${style.item_description}`}>{description}</span>
            <div className={`${style.item_option}`}></div>
            <div className={`${style.item_price}`}>
              <div className={`${style.price}`}>
                <div
                  className={`${style.price_fnl}`}
                  data-label="cart-item-price"
                >
                  <span className={`${style.itemrupee} rupee`}>
                    {getItemTotal(quantity, price)}
                  </span>
                </div>
              </div>
              <div>
                <div className={`${style.quantity}`} data-label="quantity">
                  {quantity === 1 ? (
                    <div
                      className={`${style.delete}`}
                      data-label={`${props.cartitem._id}`}
                      onClick={() => onDeleteProduct(props.cartitem)}
                    ></div>
                  ) : (
                    <div
                      className={`${style.decrease}`}
                      data-label={`${props.cartitem._id}`}
                      onClick={() => onDecreaseQuantity(props.cartitem)}
                    ></div>
                  )}
                  <span className={`${style.quantity_value}`}>{quantity}</span>
                  <div
                    className={`${style.increase}`}
                    data-label="increase"
                    onClick={() => onIncreaseQuantity(props.cartitem)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
