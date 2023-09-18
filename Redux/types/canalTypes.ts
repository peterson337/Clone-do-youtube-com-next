import { PayloadAction  } from '@reduxjs/toolkit';

export type CanalYoutube = {
 id: string;
 snippet: {
    title: string;
    description: string;
    customUrl: string;
 }       

 thumbnails: Thumbnail

 image: Image

}

export  type  Thumbnail = {
    url: string;
    width: number;
    height: number;
}

export  type Image = {
    bannerExternalUrl: string;
}

export  interface RequestState {
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   data: CanalYoutube[] | null; 
   error: string | null;
   addCase: (state : RequestState, action : PayloadAction<CanalYoutube[]>) => void;
}