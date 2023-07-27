"use client";

import { initFirebase } from "@/Firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// Create an HOC named "withAuth" to handle authentication check
// and pass the authenticated state as a prop to the wrapped component.

export default function WithAuth(props) {
  const app = initFirebase();
  const auth = getAuth();

  const [user, loading, error] = useAuthState(auth);
  return;
}
