import { useRouter } from "next/dist/client/router"; // Import from the correct path

export default function EnrollPage({ params, searchParams }) {
  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {course_id}</p>
    </div>
  );
}
