"use client";

import { initFirebase } from "@/Firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInComponent from "../sign_in/sign_in";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";

// Create an HOC named "withAuth" to handle authentication check
// and pass the authenticated state as a prop to the wrapped component.

export default function AuthValidatorWrapper(props) {
  const app = initFirebase();
  const auth = getAuth();

  const save_user_info = (user) => {
    const db = getDatabase();
    set(ref(db, "users/" + user.uid + "/user_info"), {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
    });
  };

  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <LoadingScreenComponent />;
  }
  if (error) {
    return <div>error...</div>;
  }
  if (!user) {
    return <SignInComponent />;
  }
  if (user) {
    return <div>{props.children}</div>;
  }
}
