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

  useEffect(() => {
    // Function to execute after every 5 seconds
    const timerTick = () => {
      setMessage("Timer is running...");
      // Your desired action or code to be executed at every 5-second interval goes here.
      // For example, you could update some data or trigger an event.
    };

    // Set the interval to run the timerTick function every 5 seconds
    const intervalId = setInterval(timerTick, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
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
