import React, { createContext, useState } from "react";

const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

function VideoPlayerProvider() {
  const VideoPlayerContext = createContext(context);
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  const value = { videoPlayerRef, setVideoPlayerRef };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export default VideoPlayerProvider;
