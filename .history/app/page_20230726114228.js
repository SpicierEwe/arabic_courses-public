"use client";

import { VideoPlayerContext } from "@/Context/global_context_provider";

import SignInComponent from "@/components/auth/sign_in/sign_in";
import { memo, useContext, useEffect } from "react";

export default function Home() {
  memo=> (()=>{console.log("Home page rendered")};
  const ctx = useContext(VideoPlayerContext);
  ctx.setIsGlobalNavOpen(false);

  return (
    <div>
      {/* <AllCourses></AllCourses> */}
      <SignInComponent></SignInComponent>
    </div>
  );
}
