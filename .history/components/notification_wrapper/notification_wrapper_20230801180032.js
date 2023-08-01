import styles from "./notification_wrapper.module.css";

export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <div className={styles.notification}>We'll miss you</div>
      <div>{props.children}</div>
    </div>
  );
}
