"use client";

import Image from "next/image";
import styles from "./all_courses.module.css";

import { display_stars_function } from "../../utils/utils.js";

import Link from "next/link";
import NavbarComponent from "../nav_bar/nav_bar";
import { useEffect } from "react";

export function AllCoursesDisplayComponent({ course_info }) {
  fetch("api/courses", {
    method: "GET",
  }).then((response) => {
    console.log(response);
  });

  // let courses_info = await fetch_courses_info();
  let courses_info = course_info;

  return (
    <NavbarComponent>
      <main className={styles.container}>
        <grid className={styles.grid}>
          {courses_info.map((course_info, index) => {
            return (
              <div key={index} className={styles.grid_item}>
                <Link href={"courses/enroll/" + course_info["course_id"]}>
                  <div className={styles.card}>
                    {/* course image */}
                    <Image
                      className={styles.image}
                      src={course_info["course_image_link"]}
                      alt="Picture of the author"
                      width={1000}
                      height={1000}
                    />
                    <div className={styles.info_container}>
                      {/* author info */}
                      <div className={styles.author_info_container}>
                        <p>offered by</p>
                        <h2>{course_info["offered_by"]}</h2>
                      </div>
                      <div className={styles.sub_info_container}>
                        {/* title */}
                        <h2 className={styles.title}>
                          {course_info["course_name"]}
                        </h2>
                        {/* outcome  */}
                        <p className={styles.outcome_container}>
                          <span
                            style={{ fontWeight: "bold", fontStyle: "italic" }}
                          >
                            Outcome : &nbsp;
                          </span>
                          {course_info["outcome"]}
                        </p>
                      </div>
                      {/* review stars */}
                      <div className={styles.review_container}>
                        <div style={{ display: "inline-flex" }}>
                          {display_stars_function(course_info["rating"])}
                        </div>
                        {course_info["rating"]}/5 |{" "}
                        {course_info["rating_count"]}
                        &nbsp; ratings
                      </div>
                      {/* difficulty and duration */}
                      <p className={styles.difficulty_and_duration}>
                        {course_info["difficulty"]} &#8212;{" "}
                        {course_info["duration"]}
                      </p>
                    </div>
                  </div>
                </Link>
                {/* sidelay */}
                <div className={styles.sideLay}>
                  <h2>More Information</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: course_info["description"],
                    }}
                  ></p>
                </div>
              </div>
            );
          })}
        </grid>
      </main>
    </NavbarComponent>
  );
}
