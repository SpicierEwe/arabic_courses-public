import RootLayout from "@/app/layout.js";
import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";
import NavbarComponent from "@/components/nav_bar/nav_bar.js";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  return (
    <NavbarComponent>
      <MySingleCourseDisplayComponent
        course_id={course_id}
      ></MySingleCourseDisplayComponent>
    </NavbarComponent>
  );
}
