import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  console.log(course_id);

  return (
    <div>
      <MySingleCourseDisplayComponent></MySingleCourseDisplayComponent>
    </div>
  );
}
