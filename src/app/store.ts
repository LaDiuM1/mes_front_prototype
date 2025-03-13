import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@app/features/userSlice.tsx';
import menuReducer from "./features/menuSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;