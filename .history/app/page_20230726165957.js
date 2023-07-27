import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";

export default function Home() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  //  loading screen

  if (user) {
    return (
      <div>
        <AllCoursesDisplayComponent />
      </div>
    );
  }
  if (!user) {
    return (
      <div>
        <SignInComponent />
      </div>
    );
  }
  return (
    <div>
      <LoadingScreenComponent />
    </div>
  );
}
