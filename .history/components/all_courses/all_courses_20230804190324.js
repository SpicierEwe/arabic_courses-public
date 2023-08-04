"use client";

import Image from "next/image";
import styles from "./all_courses.module.css";

import { display_stars_function } from "../../utils/utils.js";

import Link from "next/link";
import NavbarComponent from "../nav_bar/nav_bar";
import { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
  query,
  orderByKey,
  limitToLast,
  onValue,
  orderByChild,
  startAt,
  equalTo,
  endAt,
  runTransaction,
} from "firebase/database";

export function AllCoursesDisplayComponent() {
  //  this holds the fetched courses info from the internal api
  const [courses_info, setCoursesInfo] = useState([]);

  useEffect(() => {
    fetch("api/courses/all_courses_info").then((response) => {
      response.json().then((data) => {
        setCoursesInfo(data["courses_info"]);
        // console.log(data);
      });
    });
  }, []);

  // let courses_info = await fetch_courses_info();

  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const [courses_rating, setCoursesRating] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    courses_info.forEach((course) => {
      const course_id = course["course_id"];
      const y = [];

      // Fetch the ratings from the database
      get(child(dbRef, `courses/${course["course_id"]}/ratings`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const ratings = [];
            for (let i = 0; i < 5; i++) {
              if (data[i + 1] != undefined) {
                ratings.push(data[i + 1]);
              } else {
                ratings.push(0);
              }
            }

            console.log(ratings);

            let totalWeightedSum = 0;
            let totalRatings = 0;

            // Loop through each rating and calculate the weighted sum
            ratings.forEach((rating, index) => {
              const ratingValue = index + 1;
              totalWeightedSum += ratingValue * rating;
              totalRatings += rating;
            });

            // Calculate the average rating
            const averageRating = totalWeightedSum / totalRatings;

            // Set the average rating

            setAverageRating(averageRating.toString().padEnd(3, ".0"));
            // console.log("average rating = ", averageRating);
          }
        })
        .then(() => {
          get(child(dbRef, `courses/${course_id}/total_reviews`)).then(
            (snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();
                setTotalReviews(data);
              }
            }
          );
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });

  return (
    <NavbarComponent>
      <main className={styles.container}>
        <h1 className={styles.our_courses_main_title}>Available Courses_</h1>
        <grid className={styles.grid}>
          {courses_info.map((course_info, index) => {
            return (
              <div key={index} className={styles.grid_item}>
                <Link href={"/enroll/" + course_info["course_id"]}>
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
                        {courses_rating[index]} / 5 |
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
