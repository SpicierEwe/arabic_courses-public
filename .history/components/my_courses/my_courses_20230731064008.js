import { getAuth } from "firebase/auth";
import { get, getDatabase } from "firebase/database";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function MyCoursesComponent() {
  const auth = getAuth();

  const [usser, setUser] = useAuthState(auth);
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
