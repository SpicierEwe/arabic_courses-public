import { useRouter } from "next/navigation";

export default function EnrollPage(props) {
  // const router = useRouter();
  // const { course_id } = router.query;
  // console.log(props.course_id);

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Course ID: {props.course_id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const { params } = context;

  console.log(params);
  const { course_id } = params;

  return {
    props: {
      course_id,
    },
  };
}
