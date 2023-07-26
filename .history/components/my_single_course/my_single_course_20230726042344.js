"use client";

import React, { useContext, useEffect, useMemo } from "react";
import styles from "./my_single_course.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { useState } from "react";
import VideoPlayer from "../video_player/video_player";
import { VideoPlayerContext } from "@/Context/global_context";
import ResourcesDisplay from "./resources_display/resources_display";
import SideNavComponent from "./side_nav/side_nav";
import SideNotesNavComponent from "./side_notes_nav/side_notes_nav";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const ctx = useContext(VideoPlayerContext);

  // this is used to display the alert message
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  // this function is used to display the side_nav for mobile devices
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function displaySideBarMobile() {
    setIsSideBarOpen(!isSideBarOpen);
  }
  // this is the initial data for video player it is used to display the video player when the page is loaded for the first time this data will also be replace with the last watched video
  const initial_data = [
    {
      initial_data: "yes",
      book_number: 1,
      dvd_number: "01",
      video_number: 1,
      video_id: "book1dvd01PartA1",

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

  return (
    <div>
      {isAlertOpen && (
        <div className={styles.alert_bg}>
          <div className={styles.alert}>
            <div>
              <p className={styles.alert_text}>
                if you see an error as{" "}
                <span>This page has been blocked by an extension</span>while
                trying to open resources then please disable the extensions
                thatyou have installed in your browser and refresh the page.
                another way to solve this problem is to open the page in
                incognito mode.
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
      )}
      <main className={styles.main_container}>
        {/* side_nav */}
        <SideNavComponent
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
            <VideoPlayer video_url={selected_video_data[0]["video_url"]} />
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
