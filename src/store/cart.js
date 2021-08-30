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
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.CartItems = action.payload.cartItems;
      state.cartTotalItems = action.payload.cartTotalItems;
    },
    resetCart: (state, action) => {
      state.CartItems = initialState.CartItems;
      state.cartTotalItems = initialState.cartTotalItems;
    },
  },
});

export const { setCart, resetCart } = cart.actions;
export default cart.reducer;
