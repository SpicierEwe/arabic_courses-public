"use client";

import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./my_courses.module.css";
import Image from "next/image";

export default function MyCoursesComponent() {
  const auth = getAuth();

  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;

  //
  const [enrolled_courses_list, setEnrolledCoursesList] = useState([]);

  //   getting the enrolled courses list from the database
  useEffect(() => {
    fetch("/api/user/all_courses?userId=" + userId).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setEnrolledCoursesList(data);
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.grid}>
        <h1>Your Courses</h1>
        <div>
          {enrolled_courses_list.map((course, index) => {
            return (
              <div key={index}>
                <div className={styles.image_container}>
                  <Image
                    className={styles.course_image}
                    src={course.course_image_link}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  ></Image>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
