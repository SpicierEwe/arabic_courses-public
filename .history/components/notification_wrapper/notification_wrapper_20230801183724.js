import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main className={styles.notification}>
        <div className={styles.bell_container}>
          <BiSolidBellRing className={styles.bell_icon} />
        </div>
        <p>
          We&apos;ll miss you. Visit us soon!... mkmdknmkjdnfkn jkdnf kjndkfn
          jkdn fnd fnkjdfn{" "}
        </p>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
