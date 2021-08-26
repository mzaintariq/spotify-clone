import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

import styles from "./Playlist.module.scss";
import SongRow from "../songRow/SongRow";
import Loading from "../loading/Loading";
import { getMorePlaylistTracks, getPlaylist } from "../../actions";
import { accessTokenSelector } from "../../reducers/authReducer";
import {
  playlistDataSelector,
  playlistTracksSelector,
} from "../../reducers/playlistReducer";
import { isLoadingSelector } from "../../reducers/browseReducer";

import PlaylistImage from "../../assets/playlistImage.png";

function Playlist() {
  const accessToken = useSelector(accessTokenSelector);
  const playlistData = useSelector(playlistDataSelector);
  const playlistTracks = useSelector(playlistTracksSelector);
  const isLoading = useSelector(isLoadingSelector);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPlaylist([accessToken, id]));
  }, [dispatch, accessToken, id]);

  useEffect(() => {
    if (playlistData && playlistData.tracks.next) {
      dispatch(getMorePlaylistTracks([accessToken, playlistData.tracks.next]));
    }
  }, [dispatch, accessToken, playlistData]);
  
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {playlistData && (
            <div className={styles.playlist__page}>
              <div className={styles.playlist}>
                <div className={styles.playlist__info}>
                  {playlistData?.images[0] ? (
                    <img src={playlistData.images[0].url} alt="" />
                  ) : (
                    <img
                      className={styles.noPlaylistPic}
                      src={PlaylistImage}
                      alt="NoPlaylistPicture"
                    />
                  )}
                  <div className={styles.playlist__infoText}>
                    <h4>PLAYLIST</h4>
                    <h2>{playlistData.name}</h2>
                    <p>
                      {playlistData.description.replaceAll(/<[^>]*>/gi, "")}
                    </p>
                    <p>
                      <b>{playlistData.owner.display_name}</b> •{" "}
                      {playlistData.followers.total
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      likes
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.playlist__songs}>
                <div className={styles.playlist__header}>
                  <div className={styles.playlist__header__left}>
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
                <hr className={styles.playlist__line} />
                <div className={styles.playlist__songList}>
                  {playlistTracks.map((item, index) => (
                    <SongRow key={index} track={item.track} id={index} />
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

export default Playlist;
