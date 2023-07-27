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

  nav_bar_height: null,
  setNavBarHeight: (value) => {},

  nav_bar_ref: null,
  setNavBarRef: (value) => {},

  is_global_nav_open: true,
  setIsGlobalNavOpen: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);
  const [isSideNodesNavOpen, setIsSideNotesNavOpen] = useState();
  const [selectedPdfUrl, setSelectedPdfUrl] = useState();
  const [nav_bar_height, setNavBarHeight] = useState();
  const [nav_bar_ref, setNavBarRef] = useState();
  const [is_global_nav_open, setIsGlobalNavOpen] = useState(tre);

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

  const handleSetNavBarHeight = (value) => {
    setNavBarHeight(value);
  };

  const handleSetNavBarRef = (value) => {
    setNavBarRef(value);
  };

  const handleSetIsGlobalNavOpen = (value) => {
    setIsGlobalNavOpen(value);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNotesNavOpen: handleSetSideNotesNavOpen,

    selectedPdfUrl: selectedPdfUrl,
    setSelectedPdfUrl: handleSetSelectedPdfUrl,

    nav_bar_height: nav_bar_height,
    setNavBarHeight: handleSetNavBarHeight,

    nav_bar_ref: nav_bar_ref,
    setNavBarRef: handleSetNavBarRef,

    is_global_nav_open: is_global_nav_open,
    setIsGlobalNavOpen: handleSetIsGlobalNavOpen,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
