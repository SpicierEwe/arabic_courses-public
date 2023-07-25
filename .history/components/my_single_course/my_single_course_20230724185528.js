"use client";

import React, { useEffect } from "react";
import styles from "./my_single_course.module.css";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { useState } from "react";
import VideoPlayer from "../video_player/video_player";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const [selected_video_data, setSelectedVideoData] = useState([]);

  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  // console.log(course_content);

  // this function is used to display or hide the side bar on mobile devices
  const [is_side_bar_open, setIsSideBarOpen] = useState(false);
  function displaySideBarMobile() {}
  return (
    <div>
      <div className={styles.bg}></div>
      {/* menu icon for mobile devices */}
      <HiOutlineMenuAlt2 size={23} onClick={displaySideBarMobile} />
      <main className={styles.main_container}>
        {/* side bar */}
        <section className={styles.side_bar_container} id="side_bar">
          {/* section Name / book name*/}
          <div>
            {course_content.map((section, book_index) => {
              return (
                <div key={book_index}>
                  <h2 className={styles.section_name}>
                    {section["section_name"]}
                  </h2>
                  {}
                </div>
              );
            })}
          </div>
        </section>
        {/* main content */}

        <section
          id="main_content_container"
          className={styles.main_content_container}
        >
          {/* <p className={styles.test}>
            {selected_video_data.length != 0
              ? JSON.stringify(selected_video_data)
              : "Select a video"}
          </p> */}

          {/* video player */}
          {selected_video_data.length != 0 && (
            <VideoPlayer video_url={selected_video_data[0]["video_url"]} />
          )}
        </section>
      </main>
    </div>
  );
}
