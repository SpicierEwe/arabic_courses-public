import fs from "fs";
import path from "path";

import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";
import { display_stars_function } from "@/utils/utils";

export default function EnrollPageComponent({ prams }) {
  const course_id = prams.course_id;

  function fetch_the_course() {
    // fetch the course info from the database
    // fetch the course info from the database
    const filePath = path.join(
      process.cwd(),
      "database",
      "available_courses.json"
    );
    let content = fs.readFileSync(filePath, "utf8");

    content = JSON.parse(content);
    let course_info = content[course_id]["course_info"];
    return course_info;
  }

  const course_info = fetch_the_course();

  return (
    <div>
      <section className={styles.hero_container}>
        <div>
          {/* course name */}
          <h2>courese Name</h2>
          {/* offereed by info */}
          <div className={styles.offered_by_info_container}>
            <p>Offered by</p>
            <p>Author Name</p>
          </div>
          {/* rating container */}
          <div>
            <div>{display_stars_function(4)}</div>
            {course_info["rating"]}/5 | {course_info["rating_count"]}
            &nbsp; ratings
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
