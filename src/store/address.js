import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useraddress: {},
};

export const Address = createSlice({
  name: "Address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.useraddress = action.payload.address;
    },
  },
});

export const { setAddress } = Address.actions;
export default Address.reducer;
