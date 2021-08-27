import React from "react";
import { Link } from "react-router-dom";

import styles from "./ArtistCard.module.scss";

import UserImage from "../assets/userImage.png";

function ArtistCard({ data }) {
  return (
    <div>
      <Link className={styles.artistcard__link} to={`/artist/${data.id}`}>
        <div className={styles.artistcard}>
          <div className={styles.artistcard__thumbnail}>
            {data?.images[0] ? (
              <img src={data.images[0].url} alt="ArtistPicture" />
            ) : (
              <img
                className={styles.noUserPic}
                src={UserImage}
                alt="NoArtistPicture"
              />
            )}
          </div>
          <div className={styles.artistcard__text}>
            <h4>{data.name}</h4>
            <p>
              <b>Artist</b> •{" "}
              {data.followers.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              followers
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtistCard;
