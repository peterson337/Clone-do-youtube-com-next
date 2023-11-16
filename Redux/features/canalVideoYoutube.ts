import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { RequestState, YoutubeVideoCanal } from "../types/canalVideoTipagem";


export const canalVideo = createAsyncThunk(
  'videoCanalEspecifico/videoNoCanal',
  async (canal: string) => {
    const url = 'https://www.googleapis.com/youtube/v3/activities';
        const apiKey = process.env.YOUTUBE_API_KEY;
        const part = 'snippet,contentDetails,id'
        const response = await fetch(`${url}?channelId=${canal}&key=${apiKey}&part=${part}&maxResults=50	`);

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.items;
  }
)

 const returnVideoCanal = createSlice({
  name: 'videoCanal',
  initialState: {
    dataVideo: [],
      status: 'idle',
      error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder : any) => {
      
      builder.addCase(canalVideo.pending, (state : RequestState) => {
          state.status = 'loading';
      })
      builder.addCase(canalVideo.fulfilled, (state: RequestState, action : PayloadAction<YoutubeVideoCanal[]>) => {
          state.status = 'succeeded';
          state.dataVideo = action.payload;
      })
      builder.addCase(canalVideo.rejected, (state : RequestState, action : PayloadAction<string | null>) => {
          state.status = 'failed';
          state.error = action.payload; 
      });
}
});


export default  returnVideoCanal.reducer;
