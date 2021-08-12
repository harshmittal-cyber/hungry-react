import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <nav className="nav bg-white shadow-lg sticky  overflow-hidden top-0 z-10">
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
                <img
                  src="/images/cart2.png"
                  alt="cart"
                  style={{ height: 28, width: 28 }}
                />
                <span className="absolute left-5 top-1 root_button text-white text-xs rounded py-0.5 px-1 mt-2 ">
                  10
                </span>
                <span>Cart</span>
              </div>
            </Link>
            <Link to="/">
              <div
                className={`root_button py-2 px-5  text-sm text-white rounded-3xl tracking-wider`}
              >
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile menu */}
    </nav>
  );
}

export default Navi;
// bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
//
