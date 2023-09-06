import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {RequestState, YoutubeVideo  } from "../types/ApiYoutube";

export const videoEspecifico = createAsyncThunk(
    'youtubeData/videoEspecifico',
    async (q: string) => {
      // 
      const url = 'https://www.googleapis.com/youtube/v3/search';
      const apiKey = process.env.YOUTUBE_API_KEY;
      const part = 'snippet'
      const videoType = 'any'
      const channelType =  'any'
      const response = await fetch(`${url}?q=${q}&key=${apiKey}&part=${part}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.items;
    }
  );

  const returnVideoEspecifico = createSlice({
    name: 'youtube',
    initialState: {
      data: [],
      status: 'idle',
      error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder : any) => {
      
      builder.addCase(videoEspecifico.pending, (state : RequestState) => {
          state.status = 'loading';
        })
      builder.addCase(videoEspecifico.fulfilled, (state: RequestState, action : PayloadAction<YoutubeVideo[]>) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
      builder.addCase(videoEspecifico.rejected, (state : RequestState, action : PayloadAction<string | null>) => {
          state.status = 'failed';
          state.error = action.payload; 
        });
    },
  });
  
  export default returnVideoEspecifico.reducer;