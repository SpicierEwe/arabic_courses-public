"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";
import { set } from "firebase/database";
import { VideoPlayerContext } from "@/Context/global_context_provider";

export default function NotificationWrapperComponent(props) {
  const ctx = useContext(VideoPlayerContext);

  useEffect(() => {
    setTimeout(() => {
      ctx.set_display_notification({
        display: false,
        message: "",
      });
    }, 3000);
  }, [ctx.display_notification]);

  return (
    <div>
      {
        <main
          className={`${styles.notification}  ${
            ctx.display_notification.display
              ? styles.notification_visible
              : styles.notification_hidden
          }`}
        >
          <div className={styles.bell_container}>
            <BiSolidBellRing className={styles.bell_icon} />
          </div>
          <p>{ctx.display_notification.message}</p>
        </main>
      }

      <div>{props.children}</div>
    </div>
  );
}
