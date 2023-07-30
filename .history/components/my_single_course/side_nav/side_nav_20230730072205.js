"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./side_nav.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
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

export default function SideNavComponent({
  course_id,
  course_content,
  selected_video_data,
  setSelectedVideoData,
  displaySideBarMobile,
  isSideBarOpen,
  setIsSideBarOpen,
}) {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;
  const ctx = useContext(VideoPlayerContext);

  const [completed_videos_list, setCompletedVideosList] = useState([]);

  useEffect(() => {
    console.log("intital function ran");
    // ================== fetch intial completed video list ================== it fetches the completed videos list from the database when the page is reloaded for the 1st time
    function fetch_intial_completed_video_list() {
      const path = `users/${userId}/courses_progress/${course_id}/completed_videos`;

      const dbRef = ref(getDatabase());
      get(child(dbRef, path))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setCompletedVideosList(snapshot.val());
          } else {
            // if no data existas in the completed videos list

            console.log(
              "No Video was found ! no data exists! \n creating and saving a new one"
            );

            return;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetch_intial_completed_video_list();
  }, []),
    //  ============================================================
    // ================== video completed checker ==================
    useEffect(() => {
      const videoId = ctx.videoEndedId;

      // console.log("this is the side nav bar id: ", videoId);
      // console.log("   SELECTED VIDEO DATA = : ", course_id);

      // ================== video completed checker ==================
      // this function recieves the video id from the video player component when the video has ended and checks if the video is present in the completed videos list in the database or not if not then it saves the video id in the database
      function video_completed_Checker() {
        const path = `users/${userId}/courses_progress/${course_id}/completed_videos`;

        // reffrence to the database
        const dbRef = ref(getDatabase());

        // this fetches the completed videos list from the database
        get(child(dbRef, path))
          .then((snapshot) => {
            if (snapshot.exists()) {
              // console.log(snapshot.val());

              // if the returned data is not empty
              // then checking if the video id is present in the completed videos list or not
              if (snapshot.val().includes(videoId)) {
                console.log("Video already exists in completed videos list");
              }
              // if the video is not present in the completed videos list * then sadding/saving the video id in the database
              else {
                console.log(
                  "Video does not exist in completed videos list Saving Video"
                );
                setCompletedVideosList([...snapshot.val(), videoId]);

                return set(ref(getDatabase(), path), [
                  ...snapshot.val(),
                  videoId,
                ]);
              }
            }
            // if not data exists and nothing is returned from the database which means that the there is no collection of completed videos in the database * then creating a new one and saving the video id in it
            else {
              // if no data existas in the completed videos list

              console.log(
                "No Course Video Completed collection was found ! no data exists! \n creating and saving a new one"
              );
              setCompletedVideosList([videoId]);

              return set(ref(getDatabase(), path), [videoId]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
      // when intially the video id is undefined then it does not run the video completed checker function but when the video id is defined then it runs the video completed checker function
      if (videoId !== undefined) {
        video_completed_Checker();
      }
    }, [ctx, ctx.videoEndedId]);

  // this give the videos their consicutive number
  var all_video_count = 0;
  return (
    <div>
      {/* side nav */}
      <section
        className={` ${styles.side_nav_container} ${
          isSideBarOpen ? styles.side_nav_open : styles.side_nav_close
        }`}
      >
        {/* section Name / book name*/}
        {/* side nav icon inside side nav */}
        {/* <div className={styles.side_nav_icon_inside_side_nav}>
        <HiOutlineMenuAlt2 size={23} onClick={displaySideBarMobile} />
      </div> */}
        <div>
          {course_content.map((section, book_index) => {
            return (
              <div key={book_index}>
                <h2 className={styles.section_name}>
                  {section["section_name"]}
                </h2>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
