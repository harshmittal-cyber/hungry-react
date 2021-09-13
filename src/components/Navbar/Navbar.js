import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../helpers/http/index";
import styles from "./Navbar.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resetCart } from "../../store/cart";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { cartTotalItems } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);

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

  const sidebartoggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={`${styles.navbar} shadow-lg`}>
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
              {Sidebar.map((item, index) => {
                return (
                  <Link to={item.path}>
                    <li key={index} className={`${styles.menu_item}`}>
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={`${styles.header_content}`}>
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
          </div>
        </div>
        <div
          className={`${styles.responsive_drawer} ${
            sidebar ? styles.active : ""
          }  ${styles.animated} ${styles.fadeIn}`}
        >
          <div className={`${styles.responsive_drawer_content} text-gray-600`}>
            <div>
              {Sidebar.map((item, index) => {
                return (
                  <Link to={item.path}>
                    <div
                      key={index}
                      className={`${styles.tab_title}`}
                      onClick={sidebartoggle}
                    >
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
