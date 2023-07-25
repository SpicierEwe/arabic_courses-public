"use client";

import React, { useEffect } from "react";
import styles from "./video_player.module.css";
import { useState, useRef } from "react";
import { RiLoader2Fill } from "react-icons/ri";

export default function VideoPlayer({ video_url }) {
  const videoRef = useRef(null);
  const [url, setUrl] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(true);
    setUrl(video_url);
    videoRef.current.load();

    // videoRef.current.play();
  }, [video_url]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      <video
        controls
        ref={videoRef}
        preload="auto"
        onLoadedData={handleVideoLoaded}
        autoSave="true"
        className={styles.video_player}
        style={{ display: isVideoLoaded ? "block" : "none" }}
      >
        <source src={url} type="video/mp4" />
      </video>

      <div
        className={styles.video_place_holder}
        style={{ display: !isVideoLoaded ? "block" : "none" }}
      >
        <RiLoader2Fill className={styles.spin_icon} />
      </div>
    </div>
  );
}
