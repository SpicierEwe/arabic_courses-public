"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  isNotified: false,
  setIsNotified: (value) => {},

  isSideNodesNavOpen: false,
  setIsSideNodesNavOpen: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);

  const [isSideNodesNavOpen, setIsSideNodesNavOpen] = useState(() => {});

  const handleSetNotified = (value) => {
    setIsNotified(value);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNodesNavOpen: setIsSideNodesNavOpen,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
