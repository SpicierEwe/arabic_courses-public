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

export default function VideoPlayer({ video_url, videoId, courseId }) {
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

  const [completed_videos_list, setCompletedVideosList] = useState([]);
  function completedVideo() {
    console.log("video upload button FIRED");
    const path = `users/${userId}/courses_progress/${courseId}/completed_videos`;
    try {
      const dbRef = ref(getDatabase());
      get(child(dbRef, path))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            setCompletedVideosList(snapshot.val());
            if (snapshot.val().includes(videoId)) {
              return;
            } else {
              set(ref(getDatabase(), path), [...snapshot.val(), videoId]);
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log("err: ", err);
    }
  }

  const video_saved = true;
  useEffect(() => {
    videoRef.current.addEventListener("timeupdate", () => {
      const totalDurationInMinutes = videoRef.current.duration;
      const saveAtDuration = (totalDurationInMinutes / 100) * 95;

      const currentPlayingTime = Math.floor(videoRef.current.currentTime);
      if (
        currentPlayingTime >= saveAtDuration &&
        currentPlayingTime <= totalDurationInMinutes
      ) {
        completedVideo();
        console.log("Video Completed");
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          completedVideo();
        }}
      >
        UPLOAD Completeled Video
      </button>
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
