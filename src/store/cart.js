import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: {
    // productId: {
    //   _id: "",
    //   name: "",
    //   image: "",
    //   price: "",
    //   qty: "",
    // },
  },
  cartTotalItems: 0,
  cartTotal: 0,
  inProgress: false,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.CartItems = action.payload.cartItems;
      state.cartTotalItems = action.payload.cartTotalItems;
      state.cartTotal = action.payload.cartTotal;
    },
    resetCart: (state, action) => {
      state.CartItems = initialState.CartItems;
      state.cartTotalItems = initialState.cartTotalItems;
      state.cartTotal = initialState.cartTotal;
    },
    cartProgress: (state, action) => {
      console.log(action.payload);
      state.inProgress = action.payload;
    },
  },
});

export const { setCart, resetCart, cartProgress } = cart.actions;
export default cart.reducer;
