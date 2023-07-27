"use client";

import { VideoPlayerContext } from "@/Context/global_context_provider";
import { AllCourses } from "@/components/all_courses/all_courses";
import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useContext, useEffect } from "react";

export default function Home() {
  const ctx = useContext(VideoPlayerContext);

  return (
    <div>
      {/* <AllCourses></AllCourses> */}
      <SignInComponent></SignInComponent>
    </div>
  );
}
