"use client";

import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./my_courses.module.css";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

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
      <h1 className={styles.title}>Your Courses_</h1>
      <section className={styles.grid}>
        {enrolled_courses_list.map((course, index) => {
          return (
            <Link href={"/" + course.course_id} key={index}>
              <div className={styles.card}>
                <Image
                  className={styles.course_image}
                  src={course.course_image_link}
                  alt="Picture of the author"
                  width={1000}
                  height={1000}
                ></Image>
                <div className={styles.course_info_container}>
                  <h2 className={styles.course_name}>{course.course_name}</h2>
                  <div className={styles.button}>
                    <p>Continue</p>
                    <FaLongArrowAltRight className={styles.arrow_icon} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
