"use client";

import React, { useContext, useEffect, useMemo } from "react";
import styles from "./my_single_course.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from "react";
import VideoPlayer from "../video_player/video_player";
import { VideoPlayerContext } from "@/Context/global_context_provider";
import ResourcesDisplay from "./resources_display/resources_display";
import SideNavComponent from "./side_nav/side_nav";
import SideNotesNavComponent from "./side_notes_nav/side_notes_nav";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function MySingleCourseDisplayComponent({ course_id }) {
  const router = useRouter();
  const auth = getAuth();
  const courseId = course_id;
  const [user, setUser] = useAuthState(auth);
  const ctx = useContext(VideoPlayerContext);
  const userId = user.uid;

  const [isCourseEnrolled, setIsCourseEnrolled] = useState(false);

  function check_if_course_already_enrolled() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}/enrolled_courses`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          if (snapshot.val().includes(courseId)) {
            return setIsCourseEnrolled(true);
          }
        } else {
          console.log("No data available");
          // if the user is not enrolled in course we will redirect him to the enroll page
          return router.push("/enroll/" + courseId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    check_if_course_already_enrolled();
  }, []);

  //  this holds the fetched courses info from the internal api
  const [course_data, setCourseData] = useState({});

  useEffect(() => {
    const api = "/api/courses/course_full_data_id=" + course_id;
    console.log(api);
    fetch(api).then((response) => {
      console.log(
        response.json().then((data) => {
          setCourseData(data["course_data"]);
          console.log(data);
        })
      );
    });
  }, []);

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    // Clean up the class on component unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  // this is used to display the alert message
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  // this function is used to display the side_nav for mobile devices
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function displaySideBarMobile() {
    if (isSideBarOpen) {
      document.querySelector("body").style.overflow = "visible";
    } else {
      document.querySelector("body").style.overflow = "hidden";
    }
    setIsSideBarOpen(!isSideBarOpen);
  }

  useEffect(() => {}, [isSideBarOpen]);

  // this is the initial data for video player it is used to display the video player when the page is loaded for the first time this data will also be replace with the last watched video
  const initial_data = [
    {
      initial_data: "yes",
      book_number: 1,
      dvd_number: "01",
      video_number: 1,
      video_id: "B1D01PA1",

      alphabet: "A",
      video_part_code: "A1",

      // the url is slightly different for bokk1 and book 2 and book 3 when fr=or book 2 and 3 the url is same but different for book 1
      video_url:
        "http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book1Dvd01-/MAV_BK1_DVD01_PARTA1_512kb.mp4",
    },
  ];
  const [selected_video_data, setSelectedVideoData] = useState(initial_data);

  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  // console.log(course_content);
  if (isCourseEnrolled) {
    if (Object.keys(course_data).length !== 0) {
      return (
        <div>
          {/* {isAlertOpen && (
        <div className={styles.alert_bg}>
          <div className={styles.alert}>
            <div>
              <p className={styles.alert_text}>
                If you see an error as{" "}
                <span>This page has been blocked by an extension</span>while
                trying to open resources then please disable the extensions
                installed on your browser and refresh the page. Another way to
                solve this problem is to open the page in incognito mode.
              </p>
            </div>

            <div
              className={styles.close_icon}
              onClick={() => {
                setIsAlertOpen(false);
              }}
            >
              <AiOutlineCloseCircle />
            </div>
          </div>
        </div>
      )} */}
          <main
            className={styles.main_container}
            // style={{ height: `${100 - ctx.nav_bar_height}vh` }}
          >
            {/* side_nav */}
            <SideNavComponent
              course_id={course_id}
              course_content={course_content}
              selected_video_data={selected_video_data}
              setSelectedVideoData={setSelectedVideoData}
              displaySideBarMobile={displaySideBarMobile}
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
            {/* </section> */}
            {/* main content */}

            <section className={styles.main_content_container}>
              {/* side nav icon outside side nav */}
              {/* only shown for mobile devices check its css for desktop screen its hidden from there */}
              {
                <HiOutlineMenuAlt2
                  size={23}
                  onClick={() => {
                    displaySideBarMobile();
                  }}
                  className={styles.side_nav_icon_outside_side_nav}
                />
              }

              {/* video player */}
              {selected_video_data.length != 0 && (
                <VideoPlayer
                  video_url={selected_video_data[0]["video_url"]}
                  courseId={courseId}
                  videoId={selected_video_data[0]["video_id"]}
                />
              )}

              {/* resources display */}
              <ResourcesDisplay
                course_resources={
                  course_content[selected_video_data[0]["book_number"] - 1][
                    "resources"
                  ]
                }
              />
            </section>

            {/* side notes nav */}
            <SideNotesNavComponent className={styles.side_notes_nav} />
          </main>
        </div>
      );
    }
  }
}
