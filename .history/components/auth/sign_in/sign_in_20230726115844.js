import { useState } from "react";
import styles from "./sign_in.module.css";
import Image from "next/image";

export default function SignInComponent() {
  const sing_in_options = [
    {
      name: "Sign in with Google",
      icon: "/images/google_icon.svg",
      link: "/",
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
      <div className={styles.container}>
        <div></div>
        <div>
          {sing_in_options.map((item, index) => {
            return (
              <div key={index} className={styles.sign_in_option}>
                <div className={styles.sign_in_option_icon_container}>
                  <Image
                    className={styles.sign_in_option_icon}
                    src={item.icon}
                    alt="sign_in_option_icon"
                    width={30}
                    height={30}
                  />
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
