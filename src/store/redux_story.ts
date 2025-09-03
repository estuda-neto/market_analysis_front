import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./features/user/user_slice";
import { analisisReducer } from "./features/analysis/analysis_slice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        analisis: analisisReducer,
    }
});

export type StoreState = ReturnType< typeof store.getState>;