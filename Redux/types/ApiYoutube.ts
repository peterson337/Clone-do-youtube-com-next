import { PayloadAction  } from '@reduxjs/toolkit';

export type Thumbnail = {
    url: string;
    width: number;
    height: number;
  };
  
  export type YoutubeVideo = {
    id: string;
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: Thumbnail;
        high: Thumbnail;
        // Outras resoluções de thumbnails podem ser adicionadas aqui
      };
    };
  };

export  interface RequestState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    data: YoutubeVideo[] | null; 
    error: string | null;
    addCase: (state : RequestState, action : PayloadAction<YoutubeVideo[]>) => void;
  }
  
  
  export type YoutubeResponse = {
    items: YoutubeVideo[];
  };