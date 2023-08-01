"use client";

import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./my_courses.module.css";

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
              <ssection key={index}>
                <h1>{course.course_name}</h1>
                <p>{course.course_description}</p>
              </ssection>
            );
          })}
        </div>
      </section>
    </div>
  );
}