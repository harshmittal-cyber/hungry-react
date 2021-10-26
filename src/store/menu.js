import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setMenu } = menu.actions;
export default menu.reducer;
