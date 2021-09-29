import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  otp: {
    phone: "",
    hash: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      if (user === null) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    },
    setOtp: (state, action) => {
      const { phone, hash, user } = action.payload;
      if (user === null) {
        state.otp.phone = initialState.otp.phone;
        state.otp.hash = initialState.otp.hash;
      } else {
        state.otp.phone = phone;
        state.otp.hash = hash;
      }
    },
  },
});

export const { setAuth, setOtp } = auth.actions;
export default auth.reducer;
