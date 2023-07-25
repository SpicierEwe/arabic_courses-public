import React, { createContext, useState } from "react";

// Define the initial context value
const initialContext = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(initialContext);

function VideoPlayerProvider({ children }) {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  const handleSetVideoPlayerRef = (ref) => {
    setVideoPlayerRef(ref);
  };

  const value = {
    videoPlayerRef: videoPlayerRef,
    setVideoPlayerRef: handleSetVideoPlayerRef,
  };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
