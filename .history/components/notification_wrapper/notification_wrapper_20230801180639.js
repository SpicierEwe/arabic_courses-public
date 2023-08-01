import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main className={styles.flex}>
        <BiSolidBellRing />
        <div className={styles.notification}>We&apos;ll miss you</div>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
