import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {RequestState, YoutubeVideo  } from "../types/ApiYoutube";


export const fetchYoutubeData = createAsyncThunk(
  'youtube/fetchData',
  async () => {
    const url = 'https://www.googleapis.com/youtube/v3/videos';
    const apiKey = process.env.YOUTUBE_API_KEY;
    const id = 'TJetxzGpbfA';
    const part = 'snippet,contentDetails,statistics,status,player'
    const response = await fetch(`${url}?id=${id}&key=${apiKey}&part=${part}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  }
);


const youtubeSlice = createSlice({
  name: 'youtube',
  initialState: {
    data: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder : any) => {
    
    builder.addCase(fetchYoutubeData.pending, (state : RequestState) => {
        state.status = 'loading';
      })
    builder.addCase(fetchYoutubeData.fulfilled, (state: RequestState, action : PayloadAction<YoutubeVideo[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
    builder.addCase(fetchYoutubeData.rejected, (state : RequestState, action : PayloadAction<string | null>) => {
        state.status = 'failed';
        state.error = action.payload; 
      });
  },
});

export default youtubeSlice.reducer;