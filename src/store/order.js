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
      console.log("payload order", action.payload.order);
      state.order = action.payload.order;
    },
  },
});

export const { setOrders, setOrder } = order.actions;
export default order.reducer;
