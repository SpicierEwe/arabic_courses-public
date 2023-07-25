"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: (ref) => {},

  isNotified: false,
  setIsNotified: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);
  const [isNotified, setIsNotified] = useState(false);

  const handleSetVideoPlayerRef = (ref) => {
    setVideoPlayerRef(ref);
    console.log("Video player ref successfully set.");
  };

 function  handleSetNotified = (value) => {
    setIsNotified(value);
  };

  const context = {
    videoPlayerRef: videoPlayerRef,
    setVideoPlayerRef: handleSetVideoPlayerRef,

    isNotified: isNotified,
    setIsNotified: handleSetNotified,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
