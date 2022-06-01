import { createSlice } from "@reduxjs/toolkit";


export const messageResponse = createSlice({
  name: "message",
  initialState: {message: ''},
  reducers: {
    setMessage: (state, action) => {
      return state = {message: action.payload};
    },
    cleanMessage: () => {
        return {response: ""};
    },
  }
});



export const { setMessage, clearMessage } = messageResponse.actions
export default messageResponse.reducer;