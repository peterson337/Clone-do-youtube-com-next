export type YoutubeResponse = {
    items: YoutubeVideo[];
}

export type YoutubeVideo = {
    player: any;

    id:{

        videoId: string;
        kind: string;
        channelId: string;
    }

    snippet: {
        title: string;
        channelTitle: string;
        description: string;
        embedHtml: any;
        publishTime: string;
        thumbnails: {
            medium: Thumbnail;
            high: Thumbnail;
            // Outras resoluções de thumbnails podem ser adicionadas aqui
        };
    };
}

export type Thumbnail = {
    url: string;
    width: number;
    height: number;
}