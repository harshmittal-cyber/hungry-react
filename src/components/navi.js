import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <nav className="nav bg-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/images/hungry123.svg"
                  alt="brand-logo"
                  style={{ height: 65, width: 160 }}
                />
              </Link>
            </div>
            {/* primary nav */}
            <ul className="flex items-center space-x-1 -mt-2 text-gray-700 text-sm font-thin">
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
              <div className="py-5 px-3 flex items-center">
                <img
                  src="/images/cart2.png"
                  alt="cart"
                  style={{ height: 28, width: 32 }}
                />
                <span>Cart</span>
              </div>
            </Link>
            <Link to="/">
              <div className="py-2 px-5 text-sm bg-yellow-400 text-white rounded-3xl ">
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
