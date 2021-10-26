import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userdata from "./userdata";
import cart from "./cart";
import Address from "./address";
import order from "./order";
import menu from "./menu";

export const store = configureStore({
  reducer: {
    auth,
    userdata,
    cart,
    Address,
    order,
    menu,
  },
});

export default store;
