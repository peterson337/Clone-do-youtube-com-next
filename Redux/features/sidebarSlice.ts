import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';  
import { Boolean } from "../types/Sidebar";

const initialState: Boolean = {
  isSidebar: false,
};

const sidebarRedux = createSlice({
    name: 'sidebarRedux',
    initialState,
    reducers: {
        setFalse: (state : Boolean) => {
          state.isSidebar = false;
        },
        setTrue: (state : Boolean) => {
          state.isSidebar = true;
        },
        changeBoolean: (state : Boolean) => {
          state.isSidebar = !state.isSidebar;
        },
      },
      
        
        
        
    })
    
            export const {setFalse, setTrue, changeBoolean} = sidebarRedux.actions

            export const selectBoolean = (state: RootState) => state.sidebarRedux.isSidebar;

            export default sidebarRedux.reducer

            