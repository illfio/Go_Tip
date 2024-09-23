import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {
    id: 1,
    email: "",
    firstName: "",
    lastName: "",
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
    signout: (state) => {
      state.user = { ...initialState };
      state.isLoggedIn = false;
    },
  },
});

export const { login, signout } = userSlice.actions;
export default userSlice.reducer;
