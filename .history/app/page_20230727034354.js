"use client";

import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";

import Router from "next/router";
import { useRouter } from "next/router";
import AllCoursesPage from "./all_courses/all_courses";

export default function Home() {
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    return <SignInComponent />;
  }

  if (user) {
    return Router.push("/all_courses");
  }

  // return <LoadingScreenComponent />;

  return <LoadingScreenComponent></LoadingScreenComponent>;

  // return <AllCoursesDisplayComponent />;
}
