'use client';

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import sidebarRedux from './features/sidebarSlice';
import youtubeReducer from './features/slice';




export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    sidebarSlice: sidebarRedux,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;