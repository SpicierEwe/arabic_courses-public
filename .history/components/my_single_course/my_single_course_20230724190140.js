"use client";

import React, { useEffect } from "react";
import styles from "./my_single_course.module.css";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { useState } from "react";
import VideoPlayer from "../video_player/video_player";
import Link from "next/link";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const [selected_video_data, setSelectedVideoData] = useState([]);

  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  // console.log(course_content);

  // this function is used to display or hide the side bar on mobile devices
  const [is_side_bar_open, setIsSideBarOpen] = useState(false);

  const sideNav = () => {
    return (
      <nav className={styles.sideNav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  return <div>{sideNav()}</div>;
}
