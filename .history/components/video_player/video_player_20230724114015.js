"use client";

import React from "react";
import styles from "./my_single_course.module.css";

export default function VideoPlayer({ selected_video_data }) {
  return (
    <div>
      <video controls>
        <source src={selected_video_data[0]["video_url"]} type="video/mp4" />
      </video>
      <p className={styles.test}>
        {selected_video_data.length != 0
          ? JSON.stringify(selected_video_data)
          : "Select a video"}
      </p>
    </div>
  );
}
