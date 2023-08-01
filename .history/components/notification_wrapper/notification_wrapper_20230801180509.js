import styles from "./notification_wrapper.module.css";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <main>
        <BiSolidBellRing />{" "}
        <div className={styles.notification}>We'll miss you</div>
      </main>

      <div>{props.children}</div>
    </div>
  );
}
