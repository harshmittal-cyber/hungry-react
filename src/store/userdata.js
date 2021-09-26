import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userdataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetData: (state, action) => {
      state.name = initialState.name;
      state.email = initialState.email;
    },
  },
});

export const { setName, setEmail, resetData } = userdataSlice.actions;

export default userdataSlice.reducer;
