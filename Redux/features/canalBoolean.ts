import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';  
import { BooleanCanal } from "../../Redux/types/canalBooleanTipagem";


const initialState: BooleanCanal = {
    isNav: 'video',
}


const canalBoolean = createSlice({
    name: 'canalBoolean',
    initialState,
    reducers: {
        setVideo: (state : BooleanCanal) => {
            state.isNav = 'video';
        },
        setSobre: (state : BooleanCanal) => {
            state.isNav = 'sobre';
        },
        changeBooleanCanal: (state : BooleanCanal) => {
            state.isNav = state.isNav === 'video' ? 'sobre' : 'video';
        },
    },
})

export default canalBoolean.reducer

export const {setVideo, setSobre, changeBooleanCanal} = canalBoolean.actions