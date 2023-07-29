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

  //
  let video_saved = false;
  // this function is responsible for saving the completed video's video_id in the database
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
              video_saved = true;
              console.log(
                "this is the Function completedVideo and the video is saved = ",
                video_saved
              );

              videoRef.current.removeEventListener("timeupdate", () => {});

              return;
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

  useEffect(() => {
    //  this is the event listener for the video player when the video reaches 90% of its duration its considered as completed and the video_id is saved in the database
    videoRef.current.addEventListener("timeupdate", () => {
      const totalDurationInMinutes = videoRef.current.duration;
      const saveAtDuration = (totalDurationInMinutes / 100) * 95;

      const currentPlayingTime = Math.floor(videoRef.current.currentTime);
      if (
        currentPlayingTime >= saveAtDuration &&
        currentPlayingTime <= totalDurationInMinutes
      ) {
        // saving the video_id in the database
        completedVideo();
      }
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
