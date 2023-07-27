import styles from "./sign_in.module.css";

export default function SignInComponent() {
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: "url(/images/sign_in_bg.svg)" }}
    ></div>
  );
}
