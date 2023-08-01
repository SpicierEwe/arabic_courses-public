"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./notification_wrapper.module.css";
import { BiSolidBellRing } from "react-icons/bi";
import { set } from "firebase/database";
import { VideoPlayerContext } from "@/Context/global_context_provider";

export default function NotificationWrapperComponent(props) {
  const ctx = useContext(VideoPlayerContext);

  let i = 1;
  useEffect(() => {
    setTimeout((timer) => {
      ctx.set_display_notification({
        display: false,
        message: "",
      });

      console.log("");
    }, 5000);
  }, [ctx.display_notification.display]);

  let count = 0;

  useEffect(() => {
    // Function to execute after every 5 seconds
    const timerTick = () => {
      const intervalId = setInterval(timerTick, 1000);
      console.log("this is me");

      if (count == 5) {
        return () => clearInterval(intervalId);
      } else {
        console.log(count);
        count++;
      }
    };
    timerTick();
  }, []);

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
