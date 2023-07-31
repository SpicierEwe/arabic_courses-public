import { getDatabase } from "firebase/database";
import { useEffect } from "react";

export default function MyCoursesComponent() {
  useEffect(() => {
    const db = getDatabase();
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
    </div>
  );
}
