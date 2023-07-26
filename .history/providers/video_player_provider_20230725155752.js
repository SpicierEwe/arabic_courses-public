"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  isNotified: false,
  setIsNotified: (value) => {},

  displaySideBarMobileFunction: () => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);

  const [displaySideBarMobileFunction, setDisplaySideBarMobileFunction] =
    useState(() => {});

  const handleSetNotified = (value) => {
    setIsNotified(value);
  };

  const context = {
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
