"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  isNotified: false,
  setIsNotified: (value) => {},

  isSideNodesNavOpen: false,
  setIsSideNotesNavOpen: (value) => {},

  selectedPdfUrl: "",
  setSelectedPdfUrl: (value) => {},

  nav_bar_ref: null,
  setNavBarRef: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function GlobalProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);
  const [isSideNodesNavOpen, setIsSideNotesNavOpen] = useState(() => {});
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(() => {});
  const [nav_bar_ref, setNavBarRef] = useState(() => {});

  const handleSetNotified = (value) => {
    setIsNotified(value);
  };

  const handleSetSideNotesNavOpen = (value) => {
    setIsSideNotesNavOpen(value);
  };

  const handleSetSelectedPdfUrl = (value) => {
    console.log("Settings global pdf url to: " + value);
    setSelectedPdfUrl(value);
  };

  const handleSetNavBarRef = (value) => {
    setNavBarRef(value);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNotesNavOpen: handleSetSideNotesNavOpen,

    selectedPdfUrl: selectedPdfUrl,
    setSelectedPdfUrl: handleSetSelectedPdfUrl,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, GlobalProvider as VideoPlayerProvider };
