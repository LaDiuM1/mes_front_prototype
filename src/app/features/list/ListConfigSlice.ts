// src/store/listConfigSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListPageConfig } from '@components/list/listConfigType';

interface ListConfigState {
    [category: string]: ListPageConfig;
}

const initialState: ListConfigState = {};

const listConfigSlice = createSlice({
    name: 'listConfig',
    initialState,
    reducers: {
        setListConfig(state, action: PayloadAction<{ category: string; config: ListPageConfig }>) {
            const { category, config } = action.payload;
            state[category] = config;
        },
        clearListConfig(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
    },
});

export const { setListConfig } = listConfigSlice.actions;
export default listConfigSlice.reducer;
