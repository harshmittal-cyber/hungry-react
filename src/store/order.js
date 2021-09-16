import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  order: {},
};

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
    setOrder: (state, action) => {
      state.order = action.payload.order;
    },
    resetOrder: (state, action) => {
      state.orders = initialState.orders;
      state.order = initialState.order;
    },
  },
});

export const { setOrders, setOrder, resetOrder } = order.actions;
export default order.reducer;
