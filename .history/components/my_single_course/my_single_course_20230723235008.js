import React from "react";
import styles from "./my_single_course.module.css";

export default function MySingleCourseDisplayComponent(course_data) {
  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  return (
    <div>
      {/* side bar */}
      <section className={styles.side_bar_container}>
        {course_content.toString()}
      </section>
      {/* main content */}
      <section className={styles.main_content_container}></section>
    </div>
  );
}
