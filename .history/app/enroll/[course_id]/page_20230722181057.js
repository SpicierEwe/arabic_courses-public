import { useRouter } from "next/navigation";

export default function EnrollPage(props) {
  // const router = useRouter();
  // const { course_id } = router.query;
  console.log(props.slug);

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {props.slug}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}
