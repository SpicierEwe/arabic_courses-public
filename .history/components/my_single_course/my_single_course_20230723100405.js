export default function MySingleCourseDisplayComponent(course_data) {
  const course_info = course_data["course_info"];
  const course_content = course_info["course_content"];
  return (
    <div>
      <h1>My Course Specific Component</h1>
    </div>
  );
}
