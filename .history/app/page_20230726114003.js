"use client";

import { VideoPlayerContext } from "@/Context/global_context_provider";

import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useContext, useEffect } from "react";

export default function Home() {
  const ctx = useContext(VideoPlayerContext);
  ctx.setIsGlobalNavOpen(false);

  return (
    <div>
      {/* <AllCourses></AllCourses> */}
      <SignInComponent></SignInComponent>
    </div>
  );
}
