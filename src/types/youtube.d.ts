interface YT {
  Player: {
    new (elementId: string, config: {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        controls?: number;
        disablekb?: number;
        enablejsapi?: number;
        iv_load_policy?: number;
        loop?: number;
        modestbranding?: number;
        playsinline?: number;
        rel?: number;
        showinfo?: number;
        mute?: number;
        start?: number;
        playlist?: string;
        vq?: string;
      };
      events?: {
        onReady?: (event: { target: YT.Player }) => void;
        onStateChange?: (event: { data: number }) => void;
      };
    }): void;
  };
  PlayerState: {
    PLAYING: number;
  };
}

interface Window {
  YT: YT;
  onYouTubeIframeAPIReady: () => void;
}
