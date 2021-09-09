import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

import styles from "./LibraryTracks.module.scss";
import SongRow from "../SongRow";
import { accessTokenSelector } from "../../reducers/authReducer";
import { libraryTracksSelector } from "../../reducers/libraryReducer";
import { getMoreLibraryTracks } from "../../actions";

function LibraryTracks() {
  const accessToken = useSelector(accessTokenSelector);
  const libraryTracks = useSelector(libraryTracksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (libraryTracks && libraryTracks.next) {
      dispatch(getMoreLibraryTracks([accessToken, libraryTracks.next]));
    }
  }, [dispatch, accessToken, libraryTracks]);

  return (
    <div>
      {libraryTracks && (
        <div>
          <h2 className={styles.library__body__title}>Saved Songs</h2>
          <div className={styles.library__playlist__songs}>
            <div className={styles.library__playlist__header}>
              <div className={styles.library__playlist__header__left}>
                <div className={styles.library__header__number}>
                  <h4>#</h4>
                </div>
                <div className={styles.library__header__title}>
                  <h4>TITLE</h4>
                </div>
              </div>
              <div className={styles.library__header__icons}>
                <AccessTimeIcon className={styles.library__time__icon} />
              </div>
            </div>
            <hr className={styles.library__playlist__line} />
            <div className={styles.library__playlist__songList}>
              {libraryTracks.items.map((item, index) => (
                <SongRow
                  key={index}
                  track={item.track}
                  id={index}
                  type="library"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LibraryTracks;
