"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  isNotified: false,
  setIsNotified: (value) => {},

  isSideNodesNavOpen: false,
  setIsSideNotesNavOpen: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);

  const [isSideNodesNavOpen, setIsSideNodesNavOpen] = useState(() => {});

  const handleSetNotified = (value) => {
    setIsNotified(value);
  };

  const handleSetSideNodesNavOpen = (value) => {
    setIsSideNodesNavOpen(value);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNotesNavOpen: handleSetSideNodesNavOpen,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
