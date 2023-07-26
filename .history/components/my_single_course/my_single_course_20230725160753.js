"use client";

import React, { useContext, useEffect, useMemo } from "react";
import styles from "./my_single_course.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { useState } from "react";
import VideoPlayer from "../video_player/video_player";
import { VideoPlayerContext } from "@/providers/video_player_provider";
import ResourcesDisplay from "./resources_display/resources_display";
import SideNavComponent from "./side_nav/side_nav";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const ctx = useContext(VideoPlayerContext);
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
      {/* {!ctx.isNotified && (
        <h1 onClick={ctx.setIsNotified(true)} className={styles.notified}>
          Im Notififed
        </h1>
      )} */}
      {/* menu icon for mobile devices */}

      <main className={styles.main_container}>
        {/* side_nav */}
        <SideNavComponent
          course_content={course_content}
          selected_video_data={selected_video_data}
          setSelectedVideoData={setSelectedVideoData}
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
                ctx.displaySideBarMobileFunction();
              }}
              className={styles.side_nav_icon_outside_side_nav}
            />
          }

          {/* video player */}
          {selected_video_data.length != 0 && (
            <VideoPlayer video_url={selected_video_data[0]["video_url"]} />
          )}

          <ResourcesDisplay
            course_resources={
              course_content[selected_video_data[0]["book_number"] - 1][
                "resources"
              ]
            }
          />
        </section>
      </main>
    </div>
  );
}
