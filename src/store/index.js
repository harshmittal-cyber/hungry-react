import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userdata from "./userdata";
import cart from "./cart";
import Address from "./address";
import order from "./order";

export const store = configureStore({
  reducer: {
    auth,
    userdata,
    cart,
    Address,
    order,
  },
});

export default store;
