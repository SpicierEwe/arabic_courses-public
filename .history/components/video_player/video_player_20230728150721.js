"use client";

import React, { useEffect, useContext } from "react";
import styles from "./video_player.module.css";
import { useState, useRef } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { VideoPlayerContext } from "@/Context/global_context_provider";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

export default function VideoPlayer({ video_url }) {
  const ctx = useContext(VideoPlayerContext);
  const videoRef = useRef(null);
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // console.log("video_url: ", video_url);
    setIsVideoLoaded(false);
    videoRef.current.load(); //TODO uncomment this
    // videoRef.current.play(); //TODO uncomment this
  }, [video_url]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  function completedVideo() {
    const db = getDatabase();
    const compeltedVideosListRef = ref(db, "completed_videos");
    const newCompletedVideo = push(compeltedVideosListRef);
    push(newCompletedVideo, ["sdmksdm"]);
  }

  useEffect(() => {
    videoRef.current.addEventListener("timeupdate", () => {
      const time = Math.floor(videoRef.current.currentTime);
      console.log("time: ", time);
    });
  }, []);

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
        <source src={video_url} type="video/mp4" />
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
