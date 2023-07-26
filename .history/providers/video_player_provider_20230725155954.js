"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  isNotified: false,
  setIsNotified: (value) => {},

  displaySideBarMobileFunction: () => {},
  setDisplaySideBarMobileFunction: (value) => {},
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

  const handleDisplaySideBarMobileFunction = (value) => {
    setDisplaySideBarMobileFunction(value);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    displaySideBarMobileFunction: displaySideBarMobileFunction,
    setDisplaySideBarMobileFunction: handleDisplaySideBarMobileFunction,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
