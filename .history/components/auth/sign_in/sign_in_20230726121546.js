import { useState } from "react";
import styles from "./sign_in.module.css";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function SignInComponent() {
  const sing_in_options = [
    {
      name: "Sign in with Google",
      icon: <FcGoogle />,
      link: "/",
    },

    {
      name: "Sign in with Facebook",
      icon: <BsFacebook />,
      link: "/",
    },
    {
      name: "Sign in with Apple",
      icon: <AiFillApple />,
      link: "/",
    },
  ];
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: "url(/images/sign_in_bg.svg)" }}
    >
      <div className={styles.container}>
        <div></div>
        <div>
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
  );
}
