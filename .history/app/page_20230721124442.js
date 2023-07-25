import Image from "next/image";
import styles from "./page.module.css";
import { AllCourses } from "@/components/all_courses/all_courses";

export default function Home() {
  return (
    <div>
      <AllCourses></AllCourses>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  const content = fs.readFileSync(filePath, "utf8");

  let available_courses_info = [];

  for (let x in content) {
    available_courses_info.push(content[x]["course_info"]);
  }

  console.log(available_courses_info);

  return {
    props: {
      content,
    },
  };
}
