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
  
  export type YoutubeResponse = {
    items: YoutubeVideo[];
  };