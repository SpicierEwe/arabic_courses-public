"use client";

import { initFirebase } from "@/Firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInComponent from "../sign_in/sign_in";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";

// Create an HOC named "withAuth" to handle authentication check
// and pass the authenticated state as a prop to the wrapped component.

export default function WithAuth(props) {
  const app = initFirebase();
  const auth = getAuth();

  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return LoadingScreenComponent;
  }
  if (error) {
    return <div>error...</div>;
  }
  if (!user) {
    return <SignInComponent />;
  }
  if (user) {
    return <props.component {...props} />;
  }
}
