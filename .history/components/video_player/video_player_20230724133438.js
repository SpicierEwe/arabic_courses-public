"use client";

import React, { useEffect } from "react";
import styles from "./video_player.module.css";
import { useState, useRef } from "react";

export default function VideoPlayer({ video_url }) {
  const videoRef = useRef(null);
  const [url, setUrl] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [x, setX] = useState(0);

  useEffect(() => {
    setIsVideoLoaded(false);
    setUrl(video_url);
    videoRef.current.load();

    // videoRef.current.play();
    setX((prev) => prev + 1);
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
        className={styles.video_player}
        style={{ display: isVideoLoaded ? "block" : "none" }}
      >
        <source src={url} type="video/mp4" />
      </video>
      <div
        className={styles.video_place_holder}
        style={{ display: !isVideoLoaded ? "block" : "none" }}
      ></div>{" "}
      <video
        controls
        ref={videoRef}
        preload="auto"
        onLoadedData={handleVideoLoaded}
        className={styles.video_player}
        style={{ display: isVideoLoaded ? "block" : "none" }}
      >
        <source src={url} type="video/mp4" />
      </video>
      <div
        className={styles.video_place_holder}
        style={{ display: !isVideoLoaded ? "block" : "none" }}
      ></div>
    </div>
  );
}
