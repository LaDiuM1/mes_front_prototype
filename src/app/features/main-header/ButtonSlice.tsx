import {ButtonConfig} from "@components/list/configTypes.ts";
import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";


interface buttonState {
    buttons: ButtonConfig[];
}

const initialState: buttonState = {
    buttons: []
}

const buttonSlice = createSlice({
    name: "button",
    initialState: initialState,
    reducers: {
        setButtons: (state, action: PayloadAction<ButtonConfig[]>) => {
            state.buttons = action.payload;
        }
    }
})

export const {setButtons} = buttonSlice.actions;
export default buttonSlice.reducer;