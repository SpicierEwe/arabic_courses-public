import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  const handleSetVideoPlayerRef = (ref) => {
    setVideoPlayerRef(ref);
  };

  const context = {
    videoPlayerRef: videoPlayerRef,
    setVideoPlayerRef: handleSetVideoPlayerRef,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
