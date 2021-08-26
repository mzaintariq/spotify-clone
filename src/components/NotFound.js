import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.page__notfound}>
      <h2>404 - PAGE NOT FOUND</h2>
      <Link className={styles.page__link} to="/">
        <h4>Go Home</h4>
      </Link>
    </div>
  );
}

export default NotFound;
