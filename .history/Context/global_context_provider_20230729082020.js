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

  videoEnded: "",

  setVideoEnded: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [isNotified, setIsNotified] = useState(false);
  const [isSideNodesNavOpen, setIsSideNotesNavOpen] = useState();
  const [selectedPdfUrl, setSelectedPdfUrl] = useState();
  const [videoEndedId, setVideoEndedId] = useState();

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

  const handleSetVideoEnded = (videoId) => {
    setVideoEndedId(videoId);
  };

  const context = {
    isNotified: isNotified,
    setIsNotified: handleSetNotified,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNotesNavOpen: handleSetSideNotesNavOpen,

    selectedPdfUrl: selectedPdfUrl,
    setSelectedPdfUrl: handleSetSelectedPdfUrl,

    videoEnded: videoEndedId,
    setVideoEnded: handleSetVideoEnded,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
