import { useRouter } from "next/router";

export default function EnrolePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Enroll Page</h1>
    </div>
  );
}
