import React from "react";
import { useSelector } from "react-redux";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

import styles from "./SearchTracks.module.scss";
import SongRow from "../SongRow";
import { searchValueSelector } from "../../reducers/searchReducer";
import { searchTracksSelector } from "../../reducers/searchReducer";

function SearchTracks() {
  const searchTracks = useSelector(searchTracksSelector);
  const searchValue = useSelector(searchValueSelector);

  return (
    <div>
      {searchTracks.total ? (
        <div>
          <h2 className={styles.searchpage__body__title}>
            Songs for "{searchValue}"
          </h2>
          <div className={styles.searchpage__playlist__songs}>
            <div className={styles.searchpage__playlist__header}>
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
              {searchTracks.items.map((item, index) => (
                <SongRow key={item.id} track={item} id={index} type="single" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.noresult}>
          <h2>No songs found for "{searchValue}"</h2>
          <h3>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </h3>
        </div>
      )}
    </div>
  );
}

export default SearchTracks;
