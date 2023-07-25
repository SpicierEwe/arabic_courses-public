"use client";
export default function EnrollPage({ params, searchParams }) {
  const course_id = params.course_id;
  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {course_id}</p>
    </div>
  );
}
