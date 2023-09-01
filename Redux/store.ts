'use client';

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import youtubeReducer from './features/slice';

export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;