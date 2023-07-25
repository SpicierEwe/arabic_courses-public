"use client";

import { useRouter } from "next/navigation";

export default function EnrollPage() {
  const router = useRouter();
  console.log(router.);
  const { course_id } = router.query;
  console.log(course_id);

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {course_id}</p>
    </div>
  );
}
