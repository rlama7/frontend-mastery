export interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_width: {
      url: string;
      width: string;
      height: string;
    };
  };
}

export interface GiphySearchResponse {
  data: GiphyGif[];
}
