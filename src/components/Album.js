import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

import styles from "./Album.module.scss";
import Loading from "./Loading";
import SongRow from "./SongRow";
import { getAlbum } from "../actions";
import { accessTokenSelector } from "../reducers/authReducer";
import { albumDataSelector, isLoadingSelector } from "../reducers/albumReducer";

import NoAlbumImage from "../assets/playlistImage.png";

function Album() {
  const accessToken = useSelector(accessTokenSelector);
  const albumData = useSelector(albumDataSelector);
  const isLoading = useSelector(isLoadingSelector);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAlbum([accessToken, id]));
  }, [dispatch, id, accessToken]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {albumData && (
            <div className={styles.album__page}>
              <div className={styles.album}>
                <div className={styles.album__info}>
                  {albumData?.images[0] ? (
                    <img src={albumData.images[0].url} alt="" />
                  ) : (
                    <img
                      className={styles.noAlbumPic}
                      src={NoAlbumImage}
                      alt="NoAlbumPicture"
                    />
                  )}
                  <div className={styles.album__infoText}>
                    <h4>{albumData.album_type.toUpperCase()}</h4>
                    <h2>{albumData.name}</h2>
                    <p>
                      <b>
                        {albumData.artists
                          .map((artist) => artist.name)
                          .join(", ")}
                      </b>{" "}
                      • {albumData.release_date.replace(/-.*/g, "")} •{" "}
                      {albumData.total_tracks}
                      {albumData.total_tracks === 1 ? " song" : " songs"}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.album__songs}>
                <div className={styles.album__header}>
                  <div className={styles.album__header__left}>
                    <div className={styles.header__number}>
                      <h4>#</h4>
                    </div>
                    <div className={styles.header__title}>
                      <h4>TITLE</h4>
                    </div>
                  </div>
                  <div className={styles.header__icons}>
                    <AccessTimeIcon className={styles.time__icon} />
                  </div>
                </div>
                <hr className={styles.album__line} />
                <div className={styles.album__songList}>
                  {albumData.tracks.items.map((item, index) => (
                    <SongRow
                      key={item.id}
                      track={item}
                      id={index}
                      type="album"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Album;
