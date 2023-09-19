
import { PayloadAction  } from '@reduxjs/toolkit';

export type YoutubeVideoCanal = {
    snippet: {
    channelId: string;
      title: string;
      thumbnails: {
        medium: Thumbnail;
        high: Thumbnail;
        // Outras resoluções de thumbnails podem ser adicionadas aqui
      };
    };

    contentDetails: {
        upload: {
            videoId: "fsJ7YYqr8YU"
        }
    }
}

export type Thumbnail = {
    url: string;
    width: number;
    height: number;
}


export  interface RequestState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    data: YoutubeVideoCanal[] | null; 
    error: string | null;
    addCase: (state : RequestState, action : PayloadAction<YoutubeVideoCanal[]>) => void;
  }


  