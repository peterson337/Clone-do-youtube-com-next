import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { RequestState, YoutubeVideoCanal } from "../types/canalVideoTipagem";

export const canalVideo = createAsyncThunk(
  'canalVideos/fetchCanalVideo',
  async (canal: string) => {
    // Coloque aqui a lógica de chamada à API para buscar vídeos do canal
    const url = 'https://www.googleapis.com/youtube/v3/activities';
    const apiKey = process.env.YOUTUBE_API_KEY;
    const part = 'snippet,contentDetails,id'
    const response = await fetch(`${url}?q=${canal}&key=${apiKey}&part=${part}&maxResults=50	`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  }
);


const returnVideoCanal = createSlice({
  name: 'canalVideoSlice',
  initialState: {
      data: [],
      status: 'idle',
      error: null as string | null,

  },

  reducers: {},
  extraReducers: (builder : any) => {
    builder.addCase(canalVideo.pending, ((state : RequestState) => {
      state.status = 'loading';
    }));

    builder.addCase(canalVideo.fulfilled, ((state : RequestState, action: PayloadAction<YoutubeVideoCanal[]>) => {
      state.status = 'succeeded';
      state.data = action.payload;
    }));

    builder.addCase(canalVideo.rejected, (state : RequestState, action : PayloadAction<string | null>) => {
      state.status = 'failed';
      state.error = action.payload; 
    });
  },
});

export default  returnVideoCanal.reducer;
