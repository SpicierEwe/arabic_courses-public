import fs from "fs";
import path from "path";

import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";
import { display_stars_function } from "@/utils/utils";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiHummingbird } from "react-icons/gi";
import { BsGlobeAmericas } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { BiMessageRoundedMinus } from "react-icons/bi";

export default function EnrollPageComponent({ query }) {

  function aa({difficulty , duration , language}){

    const icons = [
      {icon : <GiHummingbird /> , text : "Completely Free"  },
      {icon: < BsGlobeAmericas  /> , text: "Full Online" },
      {icon: <SiLevelsdotfyi  /> , text: {difficulty} },
      {icon: <GiDuration  /> , text: {duration}	  },
      {icon: <BiMessageRoundedMinus  /> , text:{language}  },
    ];


    return icon;

  }

  const course_id = query;

  // this function fetches the course by query course id

  function fetch_the_course() {
    let course_info = {};
    // fetch the course info from the database

    const filePath = path.join(
      process.cwd(),
      "database",
      "available_courses.json"
    );
    let content = fs.readFileSync(filePath, "utf8");

    content = JSON.parse(content);
    // console.log(content);
    const courseIdToSearch = course_id;

    console.log("searching for course with id: " + courseIdToSearch + "...");
    // finding course with id
    const foundCourse = content.find(
      (course) => course.course_info.course_id === courseIdToSearch
    );

    if (foundCourse) {
      console.log("Course found:");
      course_info = foundCourse["course_info"];
    } else {
      console.log("Course not found.");
    }

    return course_info;
  }

  const course_info = fetch_the_course();

  return (
    <div className={styles.container}>
      <section className={styles.hero_container}>
        <div
          className={` ${styles.sub_container} ${styles.hero_sub_container_1}`}
        >
          {/* course name */}
          <h2 className={styles.course_name}>{course_info["course_name"]}</h2>
          {/* offereed by info */}
          <div className={styles.offered_by_info_container}>
            <p className={styles.offered_by}>Offered by</p>
            <p>{course_info["offered_by"]}</p>
          </div>
          {/* rating container */}
          <div className={styles.rating_container}>
            <div>{display_stars_function(course_info["rating"])}</div>
            {course_info["rating"]}/5 | {course_info["rating_count"]}
            &nbsp; ratings
          </div>

          <button className={styles.enroll_button}>Enroll</button>
        </div>

        {/* info container 2  */}
        <div
          className={`${styles.sub_container}  ${styles.hero_sub_container_2}`}
        >
          {icons.map((icon, index) => {
            return <div>
              {icon}
              <
            </div>
          })}
          <p>Completely Free</p>
          <p>Full Online</p>
          <p>{course_info["difficulty"]}</p>
          <p>{course_info["duration"]}</p>
        </div>
      </section>
    </div>
  );
}
