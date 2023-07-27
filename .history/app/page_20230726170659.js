import SignInComponent from "@/components/auth/sign_in/sign_in";
import { useAuthState } from "react-firebase-hooks/auth";
import { AllCoursesDisplayComponent } from "@/components/all_courses/all_courses";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";
import { getAuth } from "firebase/auth";

export default function Home() {
  // initialize firebase auth
  // const auth = getAuth();
  // const [user, loading, error] = useAuthState(auth);

  // if (!user) {
  //   return (
  //     <div>
  //       <SignInComponent />
  //     </div>
  //   );
  // }

  // if (user) {
  //   return (
  //     <div>
  //       <AllCoursesDisplayComponent />
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <LoadingScreenComponent />
  //   </div>
  // );

  return <SignInComponent></SignInComponent>;
}
