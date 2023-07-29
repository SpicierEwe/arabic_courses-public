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

  useEffect(() => {
    function video_completed_Checker() {
      const path = `users/${userId}/${courseId}/completed_videos`;
      videoRef.current.addEventListener("ended", () => {
        console.log("video ended");
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${userId}/completed_videos`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              setCompletedVideosList(snapshot.val());
              if (snapshot.val().includes(videoId)) {
                console.log("Video already exists in completed videos list");
              } else {
              }
            } else {
              console.log("No data available");
              // if the user is not enrolled in course we will redirect him to the enroll page
              return set(ref(getDatabase(), path), [videoId]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }

    video_completed_Checker();
  }, [videoRef.current]);

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
