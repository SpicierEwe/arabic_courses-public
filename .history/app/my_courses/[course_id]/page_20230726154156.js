import RootLayout from "@/app/layout.js";
import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  const course_data = fetch_the_course(course_id);

  return (
    <RootLayout showNavbar={true}>
      <MySingleCourseDisplayComponent
        course_data={course_data}
      ></MySingleCourseDisplayComponent>
    </RootLayout>
  );
}
