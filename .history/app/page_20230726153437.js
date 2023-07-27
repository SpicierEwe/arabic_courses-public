"use client";
import SignInComponent from "@/components/auth/sign_in/sign_in";
import RootLayout from "./layout";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";

export default function Home() {
  return (
    <div>
      <AllCoursesDisplayComponent></AllCoursesDisplayComponent>
      {/* <SignInComponent></SignInComponent> */}
    </div>
  );
}
