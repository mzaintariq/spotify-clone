import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

import styles from "./Option.module.scss";

function Option({ text, Icon, to, imgUrl }) {
  return (
    <Link className={styles.option__link} to={to}>
      <div className={styles.option__label}>
        {Icon && <Icon className={styles.option__icon} />}
        {imgUrl && (
          <div className={styles.option__avatar}>
            <Avatar
              src={imgUrl}
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        )}
        <h4>{text}</h4>
      </div>
    </Link>
  );
}

export default Option;
