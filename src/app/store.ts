import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@features/UserSlice.tsx';
import menuReducer from "@features/MenuSlice.tsx";
import sidebarReducer from "@features/SidebarSlice.tsx";
import titleReducer from "@features/main-header/TitleSlice.tsx";

export const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        sidebar: sidebarReducer,
        title: titleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;