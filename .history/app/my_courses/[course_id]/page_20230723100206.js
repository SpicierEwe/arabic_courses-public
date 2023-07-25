import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  const course_data = fetch_the_course(course_id);

  return (
    <div>
      <MySingleCourseDisplayComponent></MySingleCourseDisplayComponent>
    </div>
  );
}
