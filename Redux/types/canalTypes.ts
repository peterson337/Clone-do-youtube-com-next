import { PayloadAction  } from '@reduxjs/toolkit';

export type CanalYoutube = {
 id: string;
 snippet: {
    title: string;
    description: string;
    customUrl: string;
    thumbnails: thumbnails
 }       
 
 brandingSettings: {
     image: Image
    
 }

 statistics: Statistics

}

export type Statistics = {
    subscriberCount: number;
    videoCount: string
}

export  type  thumbnails = {
    high: {
    url: string;
    width: number;
    height: number;
    }
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