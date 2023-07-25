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
import Link from "next/link";

export default function EnrollPageComponent({ query }) {
  // this function displays the icons and text on the right side of the hero container
  function display_right_hero_sub_container(difficulty, duration, language) {
    const icon_size = 15;
    let icons = [
      {
        icon: <GiHummingbird className={styles.icon_size} />,
        text: "Completely Free",
      },
      {
        icon: <BsGlobeAmericas className={styles.icon_size} />,
        text: "Full Online",
      },
      {
        icon: <SiLevelsdotfyi className={styles.icon_size} />,
        text: difficulty,
      },
      { icon: <GiDuration className={styles.icon_size} />, text: duration },
      {
        icon: <BiMessageRoundedMinus className={styles.icon_size} />,
        text: language,
      },
    ];

    return icons;
  }

  // ------------------------------
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
      // console.log("Course found:");
      course_info = foundCourse["course_info"];
    } else {
      console.log("Course not found.");
    }

    return course_info;
  }

  const course_info = fetch_the_course();

  return (
    <div className={styles.container}>
      <div className={styles.hero_container_bg}>
        <section className={styles.hero_container}>
          {/* info container 1 */}
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

            {/* enroll button */}
            <Link href={"/my_courses/" + course_info["course_id"]}>
              <div className={styles.enroll_button}>Enroll</div>
            </Link>
          </div>

          {/* info container 2  */}
          <div
            className={`${styles.sub_container}  ${styles.hero_sub_container_2}`}
          >
            {display_right_hero_sub_container(
              course_info["difficulty"],
              course_info["duration"],
              course_info["language"]
            ).map((icon, index) => {
              console.log(icon["text"]);
              return (
                <div key={index} className={styles.display_right_hero_item}>
                  {icon["icon"]}
                  <p>{icon["text"]}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
