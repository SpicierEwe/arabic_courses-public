import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main className={styles.className={styles.notification}}>
        <BiSolidBellRing color="red" />
        <div ></div>We&apos;ll miss you</div>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
