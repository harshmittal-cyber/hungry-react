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
    resetAddress: (state, action) => {
      state.useraddress = initialState.useraddress;
    },
  },
});

export const { setAddress, resetAddress } = Address.actions;
export default Address.reducer;
