import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";

export default function MySingleCoursesDisplayPage({ prams, query }) {
  //   const course_data = fetch_the_course(query.course_id);
  console.log(query);

  return (
    <div>
      <MySingleCourseDisplayComponent></MySingleCourseDisplayComponent>
    </div>
  );
}
