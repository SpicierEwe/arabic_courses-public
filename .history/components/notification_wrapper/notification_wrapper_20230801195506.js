"use client";

import { useEffect, useState } from "react";
import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";
import { set } from "firebase/database";

export default function NotificationWrapperComponent(props) {
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }, []);

  return (
    <div>
      {
        <main className={{styles.notification}} >
          <div className={styles.bell_container}>
            <BiSolidBellRing className={styles.bell_icon} />
          </div>
          <p>
            We&apos;ll miss you!<br></br> Hope to see you again soon.
          </p>
        </main>
      }

      <div>{props.children}</div>
    </div>
  );
}
