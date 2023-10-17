import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;