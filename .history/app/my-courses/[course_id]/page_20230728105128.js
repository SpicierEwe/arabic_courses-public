import RootLayout from "@/app/layout.js";
import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";
import NavbarComponent from "@/components/nav_bar/nav_bar.js";

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
import { useState } from "react";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  function check_if_course_already_enrolled() {
    setIsLoading(true);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}/enrolled_courses`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setEnrolledCoursesList(snapshot.val());
          if (snapshot.val().includes(course_id)) {
            return true;
          }
        } else {
          console.log("No data available");
          // if the user is not enrolled in course we will redirect him to the enroll page
          // return router.push("/enroll/" + course_id);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const isEnrolledInCourse = check_if_course_already_enrolled();

  return (
    <NavbarComponent>
      <MySingleCourseDisplayComponent
        course_id={course_id}
      ></MySingleCourseDisplayComponent>
    </NavbarComponent>
  );
}
