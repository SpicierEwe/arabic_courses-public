"use client";

import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";

export default function Home() {
  const app = initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    return <SignInComponent />;
  }

  if (user) {
    return < />;
  }

  // return <LoadingScreenComponent />;

  return <LoadingScreenComponent></LoadingScreenComponent>;
}
