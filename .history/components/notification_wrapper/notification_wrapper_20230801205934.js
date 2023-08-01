"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";
import { set } from "firebase/database";
import { VideoPlayerContext } from "@/Context/global_context_provider";

export default function NotificationWrapperComponent(props) {
  const ctx = useContext(VideoPlayerContext);

  useEffect(() => {
    // this is to store the prev message cause if i dont the notification slides back empty which is unpleasant to look
    const prev_message = ctx.display_notification.message;
    setTimeout(() => {
      ctx.set_display_notification({
        display: false,
        message: prev_message,
      });
    }, 5000);
  }, [ctx.display_notification.display]);

  return (
    <div>
      {
        <main
          className={`${styles.notification}  
         
          `}
        >
          <div className={styles.bell_container}>
            <BiSolidBellRing className={styles.bell_icon} />
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: ctx.display_notification.message,
            }}
          ></p>
        </main>
      }

      <div>{props.children}</div>
    </div>
  );
}

// ${
//     ctx.display_notification.display
//       ? styles.notification_visible
//       : styles.notification_hidden
//   }
