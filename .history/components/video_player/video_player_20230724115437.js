"use client";

import React, { useEffect } from "react";
import styles from "./video_player.module.css";
import { useState } from "react";

export default function VideoPlayer(video_url) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(selected_video_data[0]["video_url"]);
  }, [video_url]);

  return (
    <div>
      <video controls>
        <source src={url} type="video/mp4" />
      </video>
      <p className={styles.test}>{video_url}</p>
    </div>
  );
}
