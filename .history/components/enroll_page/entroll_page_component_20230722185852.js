import React from "react";
import styles from "./enroll_page_component.module.css";

export default function EnrollPageComponent({ prams }) {
  const course_id = prams.course_id;

  return (
    <div>
      <h1>Enroll Page Component</h1>
      <p>Course ID: {course_id}</p>
    </div>
  );
}
