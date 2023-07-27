import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <div>
        <LoadingScreenComponent />
      </div>
    );
  return (
    <div>
      {/* <div>
        <AllCoursesDisplayComponent></AllCoursesDisplayComponent>
      </div> */}

      <SignInComponent></SignInComponent>
    </div>
  );
}
