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
  const filePath = path.join(process.cwd(), "data", "example.txt");
  const content = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      content,
    },
  };
}
