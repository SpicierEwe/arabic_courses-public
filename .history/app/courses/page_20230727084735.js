import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";

export default async function CoursesPage() {
  // this function fetches the courses info from the local database and returns it

  return (
    <AllCoursesDisplayComponent
      course_info={courses_info}
    ></AllCoursesDisplayComponent>
  );
}
