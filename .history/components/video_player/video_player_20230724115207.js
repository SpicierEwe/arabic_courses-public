"use client";

import React, { useEffect } from "react";

import styles from "./video_player.module.css";

export default function VideoPlayer(video_url) {
  const [url, setUrl] = useState(video_url[0]["video_url"]);

  useEffect(() => {
    setVideoUrl(selected_video_data[0]["video_url"]);
  }, [selected_video_data]);

  return (
    <div>
      <video controls>
        <source src={video_url} type="video/mp4" />
      </video>
      <p className={styles.test}>
        {selected_video_data.length != 0
          ? JSON.stringify(selected_video_data)
          : "Select a video"}
      </p>
    </div>
  );
}
