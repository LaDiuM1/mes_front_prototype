import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TitleState {
    title: string;
}

const initialState: TitleState = {
    title: ""
}

const titleSlice = createSlice({
    initialState: initialState,
    name: "title",
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
})

export const {setTitle} = titleSlice.actions;
export default titleSlice.reducer;