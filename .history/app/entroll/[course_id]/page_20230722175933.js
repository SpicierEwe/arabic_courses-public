import { useRouter } from "next/router";

export default function EnrollePage() {
  const router = useRouter();
  const { course_id } = router.query;
  console.log(course_id);

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {course_id}</p>
    </div>
  );
}
