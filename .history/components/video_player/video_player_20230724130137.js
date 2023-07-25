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
    setUrl(video_url);
    videoRef.current.load();
    // videoRef.current.play();
    setX((prev) => prev + 1);
  }, [video_url]);

  return (
    <div className={styles.container}>
      <div className={styles.video_player_container}>
        <video
          controls
          ref={videoRef}
          preload="auto"
          className={styles.video_player}
        >
          <source src={url} type="video/mp4" />
        </video>

        {/* <p className={styles.test}>{video_url}</p>
        <br></br>
        <p className={styles.test}>{x}</p> */}
      </div>
    </div>
  );
}
