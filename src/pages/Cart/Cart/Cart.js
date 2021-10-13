import React, { useEffect, useState } from "react";
import style from "./cart.module.css";
import styles from "../CartItem/cartitem.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { deleteitem } from "../../../helpers/http/index";
import { addToCart, getcartItems } from "../../../actions/cart.action";

const Cart = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cart.CartItems);

  useEffect(() => {
    setCartItems(cart.CartItems);
  }, [cart.CartItems, isAuth]);

  // increasing the quantity
  const handleIncreaseQuantity = (cartproduct) => {
    addToCart(cartproduct, 1);
  };

  // decreasing the quantity
  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      return;
    }
    addToCart(product, -1);
  };

  // deleteing the product from cart
  const handleDeleteProduct = async (item) => {
    try {
      const payload = {
        data: {
          productId: item._id,
          productprice: item.price,
        },
      };

      const res = await deleteitem(payload);
      if (res.status === 202) {
        getcartItems();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isAuth && cartItems && cart.cartTotalItems !== 0 ? (
        <div className={`${styles.cartItempage}`}>
          <div className={`${styles.cartItemContainers}`}>
            <div className={`${styles.cartItembox} col-12-12`}>
              <div
                className={`${styles.mycart}`}
                style={{ flexGrow: 1, overflow: "visible" }}
              >
                <div
                  className={`${styles.orderitem} w-full`}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px" }}
                >
                  <div
                    className={`${styles.cartheading} w-full`}
                    style={{ backgroundColor: "rgb(255,255,255)" }}
                  >
                    <div className="block w-12/12">
                      <div className={`${styles.heading}`}>
                        <div className={`${styles.heading_text}`}>
                          My Cart({cart.cartTotalItems})
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.cartitemclass} w-full`}
                    style={{ backgroundColor: "rgb(255,255,255)" }}
                  >
                    {Object.keys(cartItems).map((key, index) => (
                      <CartItem
                        key={index}
                        cartitem={cartItems[key]}
                        onDeleteProduct={handleDeleteProduct}
                        onDecreaseQuantity={handleDecreaseQuantity}
                        onIncreaseQuantity={handleIncreaseQuantity}
                      />
                    ))}
                  </div>
                  <div className={`${styles.place_order_button} col-12-12`}>
                    <div className={`${styles.place_order}`}>
                      <button className={`${styles.order_button} root_button`}>
                        <Link to="/checkout">
                          <span>Place Order</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.cart_right_section} `}>
                <div className={`${styles.cart_right} col-12-12`}>
                  <div className={`${styles.cart_right_container}`}>
                    <div className={styles.cart_right_details_section}>
                      <span className={styles.cart_right_price_heading}>
                        price details
                      </span>
                      <div className={styles.cart_right_price_details}>
                        <div className={`${styles.price_section}`}>
                          <div className={`${styles.details}`}>
                            <div className={`${styles.details1}`}>
                              Price({cart.cartTotalItems} item)
                            </div>
                          </div>
                          <span>{cart.cartTotal}</span>
                        </div>
                        <div className={`${styles.price_section}`}>
                          <div className={`${styles.details}`}>
                            <div className={`${styles.details1}`}>
                              Delivery Charges
                            </div>
                          </div>
                          <span>
                            <span
                              className={`${styles.detail_color} ${styles.detail_transform}`}
                            >
                              free
                            </span>
                          </span>
                        </div>
                        <div className={`${styles.cart_right_total_amount}`}>
                          <div className={`${styles.price_section}`}>
                            <div className={`${styles.details}`}>
                              <div className={`${styles.details1}`}>
                                Total Amount
                              </div>
                            </div>
                            <span>
                              <div className={`flex-row`}>
                                <div className={` ${styles.amount} `}>
                                  <div className={`${styles.details}`}>
                                    <div className={`item-center`}></div>
                                  </div>
                                  <span className={`rupee`}>
                                    {cart.cartTotal}
                                  </span>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style.cart}`}>
          <div className={`${style.cart_container} shadow-md`}>
            <img
              src="/images/emptycart.jpg"
              alt="emptycart"
              style={{ width: 151, height: 151 }}
            />
            {isAuth ? (
              <>
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
              </>
            ) : (
              <>
                <div className={`${style.text_wrapper}`}>
                  <span className={style.text_1}>Missing Cart Items?</span>
                  <span className={style.text_2}>
                    Login to see cart items you previously added
                  </span>
                </div>
                <div className={`${style.button_wrapper}`}>
                  <div className={`${style.button_container_1}`}>
                    <Link to="/login">
                      <button>
                        <span>LOGIN</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
