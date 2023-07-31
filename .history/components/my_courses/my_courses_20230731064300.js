"use client";

import { getAuth } from "firebase/auth";
import { get, getDatabase } from "firebase/database";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function MyCoursesComponent() {
  const auth = getAuth();

  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;

  //
  const [enrolled_courses_list, setEnrolledCoursesList] = useState([]);

  //   getting the enrolled courses list from the database
  useEffect(() => {
    const db = getDatabase();
    get(ref(db, "users/" + userId + "/enrolled_courses"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setEnrolledCoursesList(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
    </div>
  );
}
