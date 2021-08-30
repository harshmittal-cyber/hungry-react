import React from "react";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../helpers/http/index";
import style from "./Navbar.module.css";
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
    <nav className="nav bg-white  shadow-lg sticky  overflow-hidden top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/images/hungrylogo.svg"
                  alt="brand-logo"
                  style={{ height: 65, width: 160 }}
                />
              </Link>
            </div>
            {/* primary nav */}
            <ul className="hidden md:flex items-center space-x-1 -mt-2 text-gray-700 text-sm font-thin">
              <li className="py-5 px-3">
                <Link to="/">HOME</Link>
              </li>

              <li className="py-5 px-3">
                <Link to="/menu">MENU</Link>
              </li>

              <li className="py-5 px-3 flex">
                <Link to="/gift-card">GIFT CARD </Link>
              </li>
              <li className="py-5 px-3">
                <Link to="/enquiry">ENQUIRY</Link>
              </li>
              <li className="py-5 px-3 hover:text-black-900">
                <Link to="/about">ABOUT</Link>
              </li>

              <li className="py-5 px-3">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-2 -mt-2">
            <Link to="/cart">
              <div className="relative py-5 px-3 flex items-center">
                <LazyLoadImage
                  src="/images/cart2.png"
                  alt="cart"
                  style={{ height: 24, width: 24 }}
                />
                {isAuth ? (
                  <span
                    className={`absolute left-4 top-1 root_button text-white text-xs rounded py-0.2 ${
                      cartTotalItems < 10 ? "px-1.5" : "px-1"
                    } mt-2 `}
                  >
                    {!cartTotalItems ? 0 : cartTotalItems}
                  </span>
                ) : (
                  ""
                )}
                <span className="text-gray-700">Cart</span>
              </div>
            </Link>
            {isAuth ? (
              <div className={`${style.login_section}`}>
                <LazyLoadImage
                  src="/images/avatar.jpg"
                  alt="avatar"
                  data-label="profile"
                />
                <div>
                  <div className="text-gray-900">
                    {user.name ? user.name : ""}
                  </div>
                  <div className={`${style.login_text}`}>{user.phone}</div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <div
                  className={`root_button py-2 px-5  text-sm text-white rounded-3xl tracking-wider`}
                >
                  Login
                </div>
              </Link>
            )}
            {isAuth ? (
              <button
                className={`root_button py-2 px-4  text-sm text-white rounded-3xl tracking-wider`}
                onClick={logoutuser}
              >
                Logout
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
    </nav>
  );
};

export default Navbar;
// bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
//
