"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./sign_in.module.css";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignInComponent() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const sing_in_options = [
    {
      name: "Sign in with Google",
      icon: <FcGoogle className={styles.icon} />,
      link: "/",
    },

    {
      name: "Sign in with Facebook",
      icon: <BsFacebook className={styles.icon} />,
      link: "/",
    },
    {
      name: "Sign in with Apple",
      icon: <AiFillApple className={styles.icon} />,
      link: "/",
    },
  ];

  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: "url(/images/sign_in_bg.png)" }}
    >
      <div className={styles.container}>
        <div className={styles.container_left}></div>
        <div className={styles.sign_in_container}>
          <h2>
            Let&apos;s <span>Sign-in</span>
          </h2>
          <div className={styles.sign_in_options_container}>
            {sing_in_options.map((item, index) => {
              return (
                <div key={index} className={styles.sign_in_option}>
                  <div className={styles.sign_in_option_icon_container}>
                    {item.icon}
                  </div>
                  <div className={styles.sign_in_option_name_container}>
                    <p className={styles.sign_in_option_name}>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
