'use client';

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import sidebarReducer from './features/sidebarSlice';
import youtubeReducer from './features/slice';
import inputReducer  from "./features/input";
import SearchVideo  from "./features/video";
import canalDoYoutube  from "./features/canal";
import changeNavLink  from "./features/canalBoolean";
import canalVideosSlice  from "./features/canalVideoYoutube";
import assitirVideo   from "./features/assitirVideo";




export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    sidebarRedux: sidebarReducer,
    inputSlice: inputReducer,
    video: SearchVideo,   
    canal: canalDoYoutube,
    changeNav: changeNavLink,
    canalVideos: canalVideosSlice,
    assistir: assitirVideo

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;