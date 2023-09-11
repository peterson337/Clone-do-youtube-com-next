import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Input } from "../types/inputTypes";

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        inputValue: '',
    },
    reducers: {
        setInputValue: (state: Input, action : PayloadAction<string>) => {
            state.inputValue = action.payload;
        },
        
    },
});

export const { setInputValue} = inputSlice.actions;
export default inputSlice.reducer