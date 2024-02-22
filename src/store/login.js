
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  currentUser: null,
  error: false,
  isFetching: false, 
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, actions) => {
      state.currentUser = actions.payload;
      state.error = false;
      state.isFetching = true;
    },
    loginFailed: (state) => {
      state.currentUser = null;
      state.error = true;
      state.isFetching = false;
    },
    LoginStart : (state) => {
            state.currentUser = null;
            state.error = false;
            state.isFetching = true;
    }
  },
});

export const { loginSuccess, loginFailed, LoginStart } = loginSlice.actions;

export default loginSlice.reducer;