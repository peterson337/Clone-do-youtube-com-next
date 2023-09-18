'use client';
import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {RequestState, CanalYoutube  } from "../types/canalTypes";

export const canalEspecifico = createAsyncThunk(
    'canalData/canalEspecifico',
    async (id: string) => {
        const url = 'https://www.googleapis.com/youtube/v3/channels';
        const apiKey = process.env.YOUTUBE_API_KEY;
        const part = 'snippet,brandingSettings,contentDetails,contentOwnerDetails,id,statistics,status,topicDetails,localizations';
        //? channelId
        const response = await fetch(`${url}?id=${id}&key=${apiKey}&part=${part}&maxResults=50	`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.items;
    }
)

const returnCanalEspecifico = createSlice({
    name: 'youtube',
    initialState: {
        data: [],
        status: 'idle',
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder : any) => {
        
        builder.addCase(canalEspecifico.pending, (state : RequestState) => {
            state.status = 'loading';
        })
        builder.addCase(canalEspecifico.fulfilled, (state: RequestState, action : PayloadAction<CanalYoutube[]>) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        builder.addCase(canalEspecifico.rejected, (state : RequestState, action : PayloadAction<string | null>) => {
            state.status = 'failed';
            state.error = action.payload; 
        });
}
});

export default returnCanalEspecifico.reducer;
