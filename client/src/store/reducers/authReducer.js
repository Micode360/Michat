import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { setMessage } from "./messageResponseReducer";
import Cookies from "universal-cookie";

let cookies = new Cookies();
let user = cookies.get('usertkn');

export const ThunkSignUp = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, email, password }, thunkAPI) => {

    try {
      const response = await authService.signUp({
        firstName,
        lastName,
        email,
        password,
      });
       return { user: response.data };
    } catch (err) {
      thunkAPI.dispatch(setMessage(err.response.data.message?err.response.data.message:'Sign In failed'));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const ThunkSignIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, thunkAPI) => {

    try {
      const response = await authService.signIn({
        email,
        password,
      });
       return { user: response.data };
    } catch (err) {
      thunkAPI.dispatch(setMessage(err.response.data.message?err.response.data.message:'Sign up failed'));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const ThunkForgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async ({ email }, thunkAPI) => {

    try {
      const response = await authService.forgotPassword({
        email,
      });
      console.log(response, "response");
       return { user: response.data };
    } catch (err) {
      thunkAPI.dispatch(setMessage(err.response.data.message?err.response.data.message:'Server Error'));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await authService.logOut();
});



const auth = createSlice({
  name: "auth",
  initialState: user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null },
  reducers: {
    [ThunkSignUp.pending]: (state) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    [ThunkSignUp.fulfilled]: (state) => {
        state.isLoggedIn = true;
        state.user = user;
      },
      [ThunkSignUp.rejected]: (state) => {
        state.isLoggedIn = false;
        state.user = null;
      }
  },
});




export default auth.reducer;
