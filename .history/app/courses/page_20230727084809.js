import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";

import fs from "fs";
import path from "path";

export default async function CoursesPage() {
  let courses_info = await fetch_courses_info();
  // this function fetches the courses info from the local database and returns it
  async function fetch_courses_info() {
    const filePath = path.join(
      process.cwd(),
      "database",
      "available_courses.json"
    );
    let content = fs.readFileSync(filePath, "utf8");

    content = JSON.parse(content);
    let available_courses_info = [];
    for (let x in content) {
      available_courses_info.push(content[x]["course_info"]);
    }

    return available_courses_info;

    // console.log(available_courses_info);
  }
  return (
    <AllCoursesDisplayComponent
      course_info={courses_info}
    ></AllCoursesDisplayComponent>
  );
}
