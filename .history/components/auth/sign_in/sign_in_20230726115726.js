import { useState } from "react";
import styles from "./sign_in.module.css";

export default function SignInComponent() {
  const sing_in_options = [
    {
      name: "Sign in with Google",
      icon: "/images/google_icon.svg",
      link: "/",
      bg_color: "#4285F4",
    },

    {
      name: "Sign in with Facebook",
      icon: "/images/facebook_icon.svg",
      link: "/",
    },
    {
      name: "Sign in with Apple",
      icon: "/images/facebook_icon.svg",
      link: "/",
    },
  ];
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: "url(/images/sign_in_bg.svg)" }}
    >
      <div className={styles.container}></div>
    </div>
  );
}
