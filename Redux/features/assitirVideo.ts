import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {RequestStateVideo, YoutubeVideo  } from "../types/ApiYoutube";


export const requisicao = createAsyncThunk(
  'assistir/requisicao',
  async (idVideo : string) => {
    // 
    const url = 'https://www.googleapis.com/youtube/v3/videos';
    const apiKey = process.env.YOUTUBE_API_KEY;
    const part = 'snippet,contentDetails,statistics,status,player'
    const response = await fetch(`${url}?id=${idVideo}&key=${apiKey}&part=${part}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  }
);


const youtubeVideoUnico = createSlice({
  name: 'assistir',
  initialState: {
    dataVideo: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder : any) => {
    
    builder.addCase(requisicao.pending, (state : RequestStateVideo) => {
        state.status = 'loading';
      })
    builder.addCase(requisicao.fulfilled, (state: RequestStateVideo, action : PayloadAction<YoutubeVideo[]>) => {
        state.status = 'succeeded';
        state.dataVideo = action.payload;
      })
    builder.addCase(requisicao.rejected, (state : RequestStateVideo, action : PayloadAction<string | null>) => {
        state.status = 'failed';
        state.error = action.payload; 
      });
  },
});

export default youtubeVideoUnico.reducer;