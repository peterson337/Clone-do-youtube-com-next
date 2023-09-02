import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterState {
    isActive: boolean; 
  }
  

const sidebarRedux = createSlice({
    name: 'sidebarRedux',
    initialState: {
        isSidebar: false
    },

    reducers: {
        setFalse: (state : any) => {
          state.isSidebar = false;
        },
        setTrue: (state : any) => {
          state.isSidebar = true;
        },
        changeBoolean: (state : any) => {
          state.isSidebar = !state.isSidebar;
        },
      },
      
        
        
        
    })
    
            export const {setFalse, setTrue, changeBoolean} = sidebarRedux.actions

            export const selectBoolean = (state: RootState) => state.sidebarRedux.isSidebar;

            export default sidebarRedux.reducer

            