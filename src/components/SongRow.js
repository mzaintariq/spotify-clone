import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ExplicitIcon from "@material-ui/icons/Explicit";

import styles from "./SongRow.module.scss";
import { setCurrent } from "../actions";
import { playlistTracksSelector } from "../reducers/playlistReducer";
import { albumDataSelector } from "../reducers/albumReducer";

function SongRow({ track, id, type }) {
  const playlistTracks = useSelector(playlistTracksSelector);
  const albumData = useSelector(albumDataSelector);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (type === "single") {
      dispatch(setCurrent([track.uri, 0]));
    } else if (type === "album") {
      var albumTrackUris = albumData.tracks.items.map((item) => {
        return item.uri;
      });
      dispatch(setCurrent([albumTrackUris, index]));
    } else {
      var trackUris = playlistTracks.map((item) => {
        if (item.track) {
          return item.track.uri;
        }
        return null;
      });
      dispatch(setCurrent([trackUris, index]));
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
      {type !== "album" ? (
        <div className={styles.songrow__albumart}>
          <img
            className={styles.songrow__album}
            src={track.album.images[0].url}
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.songrow__small}>
        <div className={styles.songrow__info}>
          <div className={styles.songrow__info__name}>
            <h1>{track.name}</h1>
          </div>
          <div className={styles.songrow__info__artist}>
            <p>
              {track.artists.map((artist, index) => (
                <button
                  key={artist.id}
                  className={styles.album__button}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Link
                    className={styles.album__link}
                    to={`/artist/${artist.id}`}
                  >
                    <>{artist.name}</>
                  </Link>
                  {index < track.artists.length - 1 && <>, </>}
                </button>
              ))}
              {type !== "album" ? (
                <>
                  {" "}
                  -{" "}
                  <button
                    className={styles.album__button}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Link
                      className={styles.album__link}
                      to={`/album/${track.album.id}`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {track.album.name}
                    </Link>{" "}
                  </button>
                </>
              ) : (
                <></>
              )}
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
