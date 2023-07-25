import fs from "fs";
import path from "path";

import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";
import { display_stars_function } from "@/utils/utils";

export default function EnrollPageComponent({ query }) {
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
    <div>
      <section className={styles.hero_container}>
        <div>
          {/* course name */}
          <h2 className={styles.course_name}>{course_info["course_name"]}</h2>
          {/* offereed by info */}
          <div className={styles.offered_by_info_container}>
            <p>Offered by</p>
            <p>Author Name</p>
          </div>
          {/* rating container */}
          <div>
            <div>{display_stars_function(course_info["rating"])}</div>
            {course_info["rating"]}/5 | {course_info["rating_count"]}
            &nbsp; ratings
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
