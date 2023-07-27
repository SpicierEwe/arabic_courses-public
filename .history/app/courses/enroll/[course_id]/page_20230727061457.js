"use client";

import EnrollPageComponent from "@/components/enroll_page/enroll_page_component";
import NavbarComponent from "@/components/nav_bar/nav_bar";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/Firebase/firebase";
import { useRouter } from "next/navigation";
import LoadingScreenComponent from "@/components/loading_screen/loading_screen";

export default function EnrollPage({ params, searchParams }) {
  const course_id = params.course_id;

  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoadingScreenComponent />;
  }
  if (user) {
    return (
      <NavbarComponent>
        <EnrollPageComponent query={course_id}></EnrollPageComponent>
      </NavbarComponent>
    );
  }

  if (!user) {
    return ruter.replace("/");
  }
}
