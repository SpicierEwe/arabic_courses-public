import { useEffect } from "react";

export default function MyCoursesComponent() {
  useEffect(() => {

    fetch("http://localhost:3000/api/get-user-courses", {
  }, []);
  return (
    <div>
      <h1>My Courses</h1>
    </div>
  );
}
