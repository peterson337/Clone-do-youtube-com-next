import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchYoutubeData = createAsyncThunk(
  'youtube/fetchData',
  async () => {
    const url = 'https://www.googleapis.com/youtube/v3/videos';
    const apiKey = process.env.YOUTUBE_API_KEY;
    const response = await fetch(`${url}?id=TJetxzGpbfA&key=${apiKey}&part=snippet,contentDetails,statistics,status,player`);

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
    error: null,
  },
  reducers: {},
  extraReducers: (builder : any) => {
    builder
      .addCase(fetchYoutubeData.pending, (state : any) => {
        state.status = 'loading';
      })
      .addCase(fetchYoutubeData.fulfilled, (state : any, action : any) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchYoutubeData.rejected, (state : any, action : any) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default youtubeSlice.reducer;