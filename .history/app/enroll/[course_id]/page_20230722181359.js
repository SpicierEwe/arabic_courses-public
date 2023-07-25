"use client";

import { useRouter } from "next/navigation";

export default function EnrollPage(props) {
  const router = useRouter();
  const { course_id } = router.query;
  console.log(props.course_id);

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {props.course_id}</p>
    </div>
  );
}
