import { getAuth } from "firebase/auth";
import { get, getDatabase } from "firebase/database";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function MyCoursesComponent() {
  const auth = getAuth();

  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;

  //
  cosnt[(enrolled_courses_list, setEnrolledCoursesList)] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    get(ref(db, "users/" + userId + "/enrolled_courses"));
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
    </div>
  );
}
