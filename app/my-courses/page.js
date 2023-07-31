import NavbarComponent from "@/components/nav_bar/nav_bar";
import MyCoursesComponent from "../../components/my_courses/my_courses";

export default function MyCourses() {
  return (
    <div>
      <NavbarComponent>
        <MyCoursesComponent />
      </NavbarComponent>
    </div>
  );
}
