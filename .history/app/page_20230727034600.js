import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";

import { useRouter } from "next/router";
import AllCoursesPage from "./all_courses/all_courses";
import Navigator from "@/components/Navigators/navigator";

export default function Home() {
  return <Navigator />;
}
