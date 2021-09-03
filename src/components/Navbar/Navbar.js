import React from "react";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../helpers/http/index";
import styles from "./navi.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resetCart } from "../../store/cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { cartTotalItems } = useSelector((state) => state.cart);

  //logout function
  async function logoutuser() {
    try {
      const { data } = await logOut();
      dispatch(resetCart());
      dispatch(setAuth(data));
    } catch (err) {
      console.log("error", err.message);
    }
  }

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.header_container}`}>
          <div className={`${styles.hamburger_container}`}>
            {/* <img src="/images/hamburger.svg" alt="hamburger" /> */}
            <div className={`${styles.stick} ${styles.stick1}`}></div>
            <div className={`${styles.stick} ${styles.stick2}`}></div>
            <div className={`${styles.stick} ${styles.stick3}`}></div>
          </div>
          <div className={`${styles.header_content} ${styles.middle_header}`}>
            <div className={`${styles.main_logo}`}>
              <Link to="/">
                <img
                  src="/images/hungrylogo.svg"
                  alt="Hungry"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <ul className={`${styles.menu_items} text-gray-700`}>
              <Link to="/">
                <li className={`${styles.menu_item} `}>Home</li>
              </Link>
              <Link to="/menu">
                <li className={`${styles.menu_item}`}>Menu</li>
              </Link>
              <Link to="/enquiry">
                <li className={`${styles.menu_item} `}>Enquiry</li>
              </Link>
              <Link to="/about">
                <li className={`${styles.menu_item} `}>About</li>
              </Link>
              <Link to="/contact">
                <li className={`${styles.menu_item} `}>Contact</li>
              </Link>
            </ul>
          </div>
          <div className={`${styles.header_content} ${styles.right_content}`}>
            <Link to="/cart">
              <div className="relative py-5 px-3 flex items-center">
                {isAuth ? (
                  <>
                    <LazyLoadImage
                      src="/images/cart.svg"
                      alt="cart"
                      style={{ height: 28, width: 28 }}
                    />

                    <span
                      className={`absolute left-4 top-1 root_button text-white text-xs rounded py-0.2 ${
                        cartTotalItems < 10 ? "px-2" : "px-1.5"
                      } mt-2 `}
                    >
                      {!cartTotalItems ? 0 : cartTotalItems}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            </Link>

            {isAuth ? (
              <div className={`${styles.login_section}`}>
                <LazyLoadImage
                  src="/images/avatar.jpg"
                  alt="avatar"
                  data-label="profile"
                  className={`${styles.profile_image}`}
                />
                <div className={`${styles.relative_container}`}>
                  <div className={`${styles.profile_dropdown} text-gray-600`}>
                    <div className={`${styles.user_name} text-gray-700`}>
                      {user.name ? user.name : user.phone}
                    </div>
                    <div className={`${styles.logoutbtn}`}>
                      <div
                        className={`${styles.logout_button} root_button`}
                        onClick={logoutuser}
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <div>
                  <button
                    className={`${styles.login_button} ${styles.login_button_v2} ${styles.button_color} root_button`}
                  >
                    LOGIN
                  </button>
                </div>
              </Link>
            )}
            {/* {isAuth ? (
              <div className={`root_button`} onClick={logoutuser}>
                Logout
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
        <div
          className={`${styles.responsive_drawer} ${styles.animated} ${styles.fadeIn}`}
        >
          <div className={`${styles.responsive_drawer_content} text-gray-600`}>
            <div>
              <Link to="/">
                <div className={`${styles.tab_title}`}>Home</div>
              </Link>
              <Link to="/menu">
                <div className={`${styles.tab_title}`}>Menu</div>
              </Link>
              <Link to="/enquiry">
                <div className={`${styles.tab_title}`}>Enquiry</div>
              </Link>
              <Link to="/#">
                <div className={`${styles.tab_title}`}>About</div>
              </Link>
              <Link to="/#">
                <div className={`${styles.tab_title}`}>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
