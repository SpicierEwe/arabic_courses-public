import { AllCourses } from "@/components/all_courses/all_courses";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <div>
      <AllCourses></AllCourses>
    </div>
  );
}
export async function getStaticProps() {
  const coursesDirectory = path.join(process.cwd(), "courses");
  const filenames = fs.readdirSync(coursesDirectory);
  const courses = filenames.map((filename) => {
    const filePath = path.join(coursesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const course = JSON.parse(fileContents);
    return course;
  });
  return {
    props: {
      courses,
    },
  };
}
