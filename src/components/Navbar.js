import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex  justify-between flex-wrap bg-white shadow-lg h-16 w-full">
      <div className="flex items-center px-4">
        <div className="flex items-center px-1 py-4">
          <Link to="/">
            <img
              src="/images/hungry123.svg"
              alt="brand-logo"
              style={{ height: 65, width: 170 }}
            />
          </Link>
        </div>
        <ul className="flex items-center mb-3 px-1 py-4 text-sm tracking-wider mt-0.5 font-thin sm:text-xs">
          <li className=" mr-2 ">
            <Link to="/">HOME</Link>
          </li>

          <li className="ml-8 mr-2 sm:ml-2">
            <Link to="/menu">MENU</Link>
          </li>

          <li className="ml-8 mr-2 sm:ml-2">
            <Link to="/gift-card">GIFT CARD </Link>
          </li>
          <li className="ml-8 mr-2 sm:ml-2">
            <Link to="/enquiry">CORPORATE ENQUIRY</Link>
          </li>
          <li className="ml-8 mr-2 sm:ml-2">
            <Link to="/about">ABOUT</Link>
          </li>

          <li className="ml-8 mr-2 sm:ml-2">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">Hi</div>
    </nav>
  );
}

export default Navbar;
