import styles from "./sign_in.module.css";

import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

import { initFirebase } from "@/Firebase/firebase";

export default function SignInComponent() {
  // intialize firebase
  const app = initFirebase();

  // initialize firebase auth
  const auth = getAuth();

  // sign in with google
  const signInWithGoogle = async () => {
    // initialize google auth provider
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
  };

  const signInWithFacebook = async () => {};

  const signInWithApple = async () => {
    const provider = new OAuthProvider("apple.com");
    const result = await signInWithPopup(auth, provider);
  };

  const sing_in_options = [
    {
      name: "Sign in with Google",
      icon: <FcGoogle className={styles.icon} />,
      link: "/",
      onClick: signInWithGoogle,
    },

    {
      name: "Sign in with Facebook",
      icon: <BsFacebook className={styles.icon} />,
      link: "/",
      onClick: signInWithGoogle,
    },
    {
      name: "Sign in with Apple",
      icon: <AiFillApple className={styles.icon} />,
      link: "/",
      onClick: signInWithGoogle,
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
                <div
                  key={index}
                  className={styles.sign_in_option}
                  onClick={item.onClick}
                >
                  {/* icon */}
                  <div className={styles.sign_in_option_icon_container}>
                    {item.icon}
                  </div>
                  {/* name */}
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
