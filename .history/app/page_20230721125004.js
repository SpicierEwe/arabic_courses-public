import Image from "next/image";
import styles from "./page.module.css";
import { AllCourses } from "@/components/all_courses/all_courses";
import fs from "fs";
import path from "path";

export default function Home() {
  return (
    <div>
      <AllCourses></AllCourses>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("courses"));
  const courses = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("courses", filename),
      "utf-8"
    );
    return {
      slug,
      ...JSON.parse(JSON.stringify(frontmatter)),
    };
  });
  return {
    props: {
      courses,
    },
  };
}
