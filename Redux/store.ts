'use client';

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import sidebarReducer from './features/sidebarSlice';
import youtubeReducer from './features/slice';
import returnVideoEspecificoReducer from "./features/video";




export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    sidebarRedux: sidebarReducer,
    returnVideoEspecifico: returnVideoEspecificoReducer,
    //sidebarRedux: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;