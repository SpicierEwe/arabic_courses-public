import React from "react";
import styles from "./loading_screen.module.css";

const LoadingScreenComponent = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingScreenComponent;
