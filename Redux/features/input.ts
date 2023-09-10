import {createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        inputValue: '',
    },
    reducers: {
        setInputValue: (state: any, action : any) => {
            state.inputValue = action.payload;
        },
        
    },
});

export const { setInputValue} = inputSlice.actions;
export default inputSlice.reducer