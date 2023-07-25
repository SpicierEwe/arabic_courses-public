export default function MySingleCourseDisplayComponent(course_data) {
  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  return (
    <div>
      {/* side bar */}
      <section className={StyleSheet.side_bar_conrtainer}></section>
      {/* main content */}
      <section className={StyleSheet.main_content_container}></section>
    </div>
  );
}
