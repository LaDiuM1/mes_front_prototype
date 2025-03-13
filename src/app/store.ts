import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@app/features/userSlice';
import menuReducer from "@app/features/menuSlice";
import sidebarReducer from "@app/features/sidebarSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        sidebar: sidebarReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;