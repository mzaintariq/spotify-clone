import React from "react";

import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default Loading;
