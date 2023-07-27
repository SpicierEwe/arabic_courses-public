import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";

export default function Home() {
  const app = intiFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    return (
      <div>
        <SignInComponent />
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <AllCoursesDisplayComponent />
      </div>
    );
  }

  return (
    <div>
      <LoadingScreenComponent />
    </div>
  );
}
