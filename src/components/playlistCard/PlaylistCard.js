import React from "react";
import { Link } from "react-router-dom";

import styles from "./PlaylistCard.module.scss";

import PlaylistImage from "../../assets/playlistImage.png";

function PlaylistCard({ data }) {
  return (
    <div>
      <Link className={styles.playlistcard__link} to={`/playlist/${data.id}`}>
        <div className={styles.playlistcard}>
          <div className={styles.playlistcard__thumbnail}>
            {data?.images[0] ? (
              <img src={data.images[0].url} alt="PlaylistArt" />
            ) : (
              <img
                className={styles.noPlaylistPic}
                src={PlaylistImage}
                alt="NoPlaylistPicture"
              />
            )}
          </div>
          <div className={styles.playlistcard__text}>
            <h4>{data.name}</h4>
            {data.description ? (
              <p>{data.description.replaceAll(/<[^>]*>/gi, "")}</p>
            ) : (
              <p>
                Made by: <b>{data.owner.display_name}</b>
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlaylistCard;
