import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ExplicitIcon from "@material-ui/icons/Explicit";

import styles from "./SongRow.module.scss";
import { setCurrent } from "../../actions";
import { playlistDataSelector } from "../../reducers/playlistReducer";

function SongRow({ track, id, type }) {
  const playlistData = useSelector(playlistDataSelector);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (type === "single") {
      dispatch(setCurrent([track.uri, 0]));
    } else {
      var trackUris = playlistData.tracks.items.map((item) => {
        if (item.track) {
          return item.track.uri;
        }
        return null;
      });
      var filteredTrackUris = trackUris.filter((item) => {
        return item != null;
      });
      dispatch(setCurrent([filteredTrackUris, index]));
    }
  };

  const msToMinutesAndSeconds = (duration_ms) => {
    var minutes = Math.floor(duration_ms / 60000);
    var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className={styles.songrow} onClick={() => handleClick(id)}>
      <div className={styles.songrow__number}>
        <h4>{id + 1}</h4>
      </div>
      <div className={styles.songrow__albumart}>
        <img
          className={styles.songrow__album}
          src={track.album.images[0].url}
          alt=""
        />
      </div>
      <div className={styles.songrow__small}>
        <div className={styles.songrow__info}>
          <div className={styles.songrow__info__name}>
            <h1>{track.name}</h1>
          </div>
          <div className={styles.songrow__info__artist}>
            <p>
              {track.artists.map((artist) => artist.name).join(", ")} - {}
              {track.album.name}
            </p>
          </div>
        </div>

        <div className={styles.songrow_right}>
          {track.explicit ? (
            <ExplicitIcon className={styles.songrow__info__icon} />
          ) : (
            <></>
          )}
          <div className={styles.songrow_time}>
            {msToMinutesAndSeconds(track.duration_ms)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
