import EnrollPageComponent from "@/components/enroll_page/enroll_page_component";

export default function EnrollPage({ params, searchParams }) {
  const course_id = params.course_id;

  return (
    <div>
      <EnrollPageComponent query={course_id}></EnrollPageComponent>
    </div>
  );
}
