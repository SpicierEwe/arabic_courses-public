import EnrollPageComponent from "@/components/enroll_page/enroll_page_component";
import NavbarComponent from "@/components/nav_bar/nav_bar";

export default function EnrollPage({ params, searchParams }) {
  const course_id = params.course_id;

  return (
    <NavbarComponent>
      <EnrollPageComponent query={course_id}></EnrollPageComponent>
    </NavbarComponent>
  );
}
