import { useState } from "react";
import styles from "./sign_in.module.css";

export default function SignInComponent() {
  const [use_sign_in] = useState();
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: "url(/images/sign_in_bg.svg)" }}
    >
      <div className={styles.container}></div>
    </div>
  );
}
