"use client";
import SignInComponent from "@/components/auth/sign_in/sign_in";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout showNavbar={false}>
      <div>
        {/* <AllCourses></AllCourses> */}
        <SignInComponent></SignInComponent>
      </div>
    </RootLayout>
  );
}
