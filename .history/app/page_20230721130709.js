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
