import React from "react";
import { Link } from "react-router-dom";

import styles from "./AlbumCard.module.scss";
import PlaylistImage from "../assets/playlistImage.png";

function AlbumCard({ data }) {
  return (
    <div>
      <Link className={styles.albumcard__link} to={`/album/${data.id}`}>
        <div className={styles.albumcard}>
          <div className={styles.albumcard__thumbnail}>
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
          <div className={styles.albumcard__text}>
            <h4>{data.name}</h4>
            <p>{data.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
