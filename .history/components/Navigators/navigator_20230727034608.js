import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";

export default function NavigatorComponent() {
  return <AllCoursesDisplayComponent />;
}
