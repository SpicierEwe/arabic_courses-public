import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main className={styles.notification}>
        <BiSolidBellRing className={styles.bell_icon} />
        <p>
          We&apos;ll miss you slkjdnklnjs ifhnikdj hnfidbhnsf bnsdjkf bnkdsbf jb
        </p>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
