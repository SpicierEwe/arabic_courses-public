"use client";

import React, { createContext, useState } from "react";

// Define the initial context value
const context = {
  display_notification: {
    display: false,
    message: "",
  },
  set_display_notification: (value) => {},

  isSideNodesNavOpen: false,
  setIsSideNotesNavOpen: (value) => {},

  selectedPdfUrl: "",
  setSelectedPdfUrl: (value) => {},

  videoEndedData: {
    endedVideoId: "",
    endedVideoForCourseId: "",
  },

  setVideoEndedData: (value) => {},
};

// Create the VideoPlayerContext outside the VideoPlayerProvider function
const VideoPlayerContext = createContext(context);

function VideoPlayerProvider({ children }) {
  const [display_notification, set_display_notification] = useState();
  const [isSideNodesNavOpen, setIsSideNotesNavOpen] = useState();
  const [selectedPdfUrl, setSelectedPdfUrl] = useState();
  const [videoEndedData, setVideoEndedData] = useState();

  const handleDisplayNotification = (value) => {
    set_display_notification(value);
  };

  const handleSetSideNotesNavOpen = (value) => {
    setIsSideNotesNavOpen(value);
  };

  const handleSetSelectedPdfUrl = (value) => {
    console.log("Settings global pdf url to: " + value);
    setSelectedPdfUrl(value);
  };

  const handleSetVideoEnded = (videoId) => {
    setVideoEndedData(videoId);
  };

  const context = {
    display_notification: display_notification,
    set_display_notification: handleDisplayNotification,

    isSideNodesNavOpen: isSideNodesNavOpen,
    setIsSideNotesNavOpen: handleSetSideNotesNavOpen,

    selectedPdfUrl: selectedPdfUrl,
    setSelectedPdfUrl: handleSetSelectedPdfUrl,

    videoEndedData: videoEndedData,
    setVideoEndedData: handleSetVideoEnded,
  };

  return (
    <VideoPlayerContext.Provider value={context}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export { VideoPlayerContext, VideoPlayerProvider };
