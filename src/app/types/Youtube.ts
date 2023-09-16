export type Thumbnail = {
    url: string;
    width: number;
    height: number;
  };
  
  export type YoutubeVideo = {
    id: string;
    player: any
    statistics: any;
    viewCount: number;
    snippet: {
      channelId: string;
      title: string;
      channelTitle: string;
      description: string;
      embedHtml: any;
      publishedAt: string;
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
  