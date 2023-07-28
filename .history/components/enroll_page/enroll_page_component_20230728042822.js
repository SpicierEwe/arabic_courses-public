"use client";

import React from "react";
import styles from "./enroll_page_component.module.css";
import { display_stars_function } from "@/utils/utils";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiHummingbird } from "react-icons/gi";
import { BsGlobeAmericas } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { BiMessageRoundedMinus } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function EnrollPageComponent({ query }) {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const [is_coourse_enrolled, setIsCourseEnrolled] = useState(false);
  // ====================================================================================================
  // ====================================================================================================

  function add_to_user_enrolled_courses(selected_course_id) {
    const db = getDatabase();
    const userId = "hammad"; // Replace with the actual user ID

    const courseId = selected_course_id;

    const reff = ref(db, "users/" + userId);
    const enreolled_courses_ref = ref(
      db,
      "users/" + userId + "/enrolled_courses"
    );

    // Push the courseId to the enrolled_courses array.
    const x = push(reff);

    get(child(reff, "enrolled_courses")).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        data.map((existingCourseID) => {
          if (existingCourseID === courseId) {
            console.log("course already exists");
            setIsCourseEnrolled(true);
            return;
          } else {
            set(enreolled_courses_ref, [...data, "this is the new one"]);
            setIsCourseEnrolled(true);
          }
        });
      } else {
        console.log("No data available");

        set(enreolled_courses_ref, [courseId]);
      }
    });
  }

  // ====================================================================================================
  // ====================================================================================================

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

  //  this holds the fetched courses info from the internal api
  const [course_info, setCourseInfo] = useState({});
  // fetching data from the internal api
  useEffect(() => {
    const api = "/api/course_info_id=" + course_id;
    console.log(api);
    fetch(api).then((response) => {
      response.json().then((data) => {
        setCourseInfo(data["course_info"]);
        // console.log(data);
      });
    });
  }, []);

  //
  if (Object.keys(course_info).length !== 0) {
    return (
      <div className={styles.container}>
        <div className={styles.hero_container_bg}>
          <section className={styles.hero_container}>
            {/* info container 1 */}
            <div
              className={` ${styles.sub_container} ${styles.hero_sub_container_1}`}
            >
              {/* course name */}
              <h2 className={styles.course_name}>
                {course_info["course_name"]}
              </h2>
              {/* offereed by info */}
              <div className={styles.offered_by_info_container}>
                <p className={styles.offered_by}>Offered by</p>
                <p>{course_info["offered_by"]}</p>
              </div>
              {/* rating container */}
              <div className={styles.rating_container}>
                <div className={styles.rating_stars}>
                  {display_stars_function(course_info["rating"]).map(
                    (star, index) => {
                      return <div key={index}>{star}</div>;
                    }
                  )}
                </div>
                {course_info["rating"]}/5 | {course_info["rating_count"]}
                &nbsp; ratings
              </div>

              {/* enroll button */}
              {/* <Link href={"/my-courses/" + course_info["course_id"]}> */}
              <div
                className={styles.enroll_button}
                onClick={() => {
                  //
                  add_to_user_enrolled_courses(course_info["course_id"]);
                }}
              >
                {is_coourse_enrolled ? "Go to Course" : "Enroll"}
              </div>
              {/* </Link> */}
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
}
