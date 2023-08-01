import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main className={styles.flex}>
        <BiSolidBellRing scale={21} />
        <div className={styles.notification}>We'll miss you</div>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
