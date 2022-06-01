import { configureStore } from "@reduxjs/toolkit";
import auth from "./authReducer";
import messageResponse from "./messageResponseReducer";

export const store = configureStore(
    {
        reducer: {
            auth,
            messageResponse
        }
    }
);