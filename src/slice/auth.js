import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSucces: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    loginUserFeilure: (state) => {
      state.loggedIn = false;
      state.isLoading = "error";
    },
  },
});

export const { loginUserStart, loginUserSucces, loginUserFeilure } =
  authSlice.actions;
export default authSlice.reducer;
