"use client";

import React from "react";
import styles from "./enroll_page_component.module.css";
import { display_stars_function } from "@/utils/utils";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiHummingbird } from "react-icons/gi";
import { BsGlobeAmericas } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { BiMessageRoundedMinus } from "react-icons/bi";

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
import { useRouter } from "next/navigation";
import Description from "./description/description";
// ====================================================================================================
// ====================================================================================================
export default function EnrollPageComponent({ query }) {
  const router = useRouter();
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const [is_coourse_enrolled, setIsCourseEnrolled] = useState(false);

  const userId = user.uid; // Replace with the actual user ID

  const courseId = query;

  const [enrolled_courses_list, setEnrolledCoursesList] = useState([]);

  //  this function checks if the course is already enrolled by the user or not

  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const fetchAverageRating = () => {
    // Fetch the ratings from the database
    const dbRef = ref(getDatabase());
    get(child(dbRef, `courses/${course_id}/ratings`))
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
  };

  useEffect(() => {
    fetchAverageRating();
  }, []);

  // ====================================================================================================
  function check_if_course_already_enrolled() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}/enrolled_courses`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setEnrolledCoursesList(snapshot.val());
          if (snapshot.val().includes(courseId)) {
            setIsCourseEnrolled(true);
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    check_if_course_already_enrolled(courseId);
  }, []);
  // ====================================================================================================
  //  this funcion adds the course to the user's new enrolled courses to enrollled courses list
  function add_to_user_enrolled_courses() {
    const db = getDatabase();
    if (!is_coourse_enrolled) {
      set(ref(db, "users/" + userId + "/enrolled_courses"), [
        ...enrolled_courses_list,
        courseId,
      ]);
      setIsCourseEnrolled(true);
      // router.push("/my-courses/" + courseId);
      console.log(query);
    } else {
      router.push("/my-courses/" + courseId);
    }
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
    const api = "/api/courses/course_info_id=" + course_id;
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
                  {display_stars_function(averageRating).map((star, index) => {
                    return <div key={index}>{star}</div>;
                  })}
                </div>
                {course_info["rating"]}/5 | {course_info["rating_count"]}
                &nbsp; ratings
              </div>

              {/* enroll button */}

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

        <Description
          courseInfo={course_info}
          isEnrolled={is_coourse_enrolled}
        ></Description>
      </div>
    );
  }
}
