import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";

export default function MySingleCoursesDisplayPage({ query }) {
  const course_data = fetch_the_course(query.course_id);
  return (
    <div>
      <MySingleCourseDisplayComponent></MySingleCourseDisplayComponent>
    </div>
  );
}
