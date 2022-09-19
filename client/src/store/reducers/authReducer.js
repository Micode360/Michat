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

export const ThunkConfirmAccount= createAsyncThunk(
  "auth/confirm",
  async (token, thunkAPI) => {

    try {
       const response = await authService.confirmAccount(token);
       console.log(response, "resonse")
       if(response.success === true) {
       return thunkAPI.dispatch(setMessage({success: response.success, confirmed: response.data}));
      }
    } catch (err) {
      thunkAPI.dispatch(setMessage(err.response.data.message?err.response.data.message:'Account Confirmation Error'));
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
      return thunkAPI.dispatch(setMessage({success: response.success, response: response.data}));
    } catch (err) {
      thunkAPI.dispatch(setMessage(err.response.data.message?err.response.data.message:'Server Error'));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const ThunkResetPassword = createAsyncThunk(
  "auth/resetpassword",
  async ({token, password}, thunkAPI) => {
   
    try {
      const response = await authService.resetPassword({
        token,
        password
      });
      console.log(response, "response");
      return thunkAPI.dispatch(setMessage({success: response.success, response: response.data}));
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
