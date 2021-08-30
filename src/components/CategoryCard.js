import React from "react";
import { Link } from "react-router-dom";

import styles from "./CategoryCard.module.scss";

function CategoryCard({ data }) {
  return (
    <div>
      <Link className={styles.categorycard__link} to={`/category/${data.id}`}>
        <div className={styles.categorycard}>
          <div className={styles.categorycard__thumbnail}>
            <img src={data.icons[0].url} alt="CategoryArt" />
          </div>
          <div className={styles.categorycard__text}>
            <h4>{data.name}</h4>
            <p>Genre</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
