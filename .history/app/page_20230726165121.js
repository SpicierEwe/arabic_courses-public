import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";

export default function Home() {
  return (
    <div>
      {/* <div>
        <AllCoursesDisplayComponent></AllCoursesDisplayComponent>
      </div> */}

      <SignInComponent></SignInComponent>
    </div>
  );
}
