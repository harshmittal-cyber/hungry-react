import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userdata from "./userdata";
import cart from "./cart";

export const store = configureStore({
  reducer: {
    auth,
    userdata,
    cart,
  },
});

export default store;
