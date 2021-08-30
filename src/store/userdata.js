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
  },
});

export const { setName, setEmail } = userdataSlice.actions;

export default userdataSlice.reducer;
