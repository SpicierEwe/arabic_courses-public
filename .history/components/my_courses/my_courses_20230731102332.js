"use client";

import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

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
    <div>
      <h1>{enrolled_courses_list.toString()}</h1>
    </div>
  );
}
