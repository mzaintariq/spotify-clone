import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./SearchToggle.module.scss";
import { setSearchToggle } from "../../actions";
import { searchToggleValueSelector } from "../../reducers/searchReducer";

function SearchToggle() {
  const searchToggleValue = useSelector(searchToggleValueSelector);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setSearchToggle(value));
  };

  return (
    <div className={styles.searchpage__toggle}>
      <input
        id="tracks"
        name="toggle"
        type="radio"
        checked={searchToggleValue === "tracks"}
        onChange={() => handleClick("tracks")}
      />
      <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
        <h4>Songs</h4>
      </label>
      <input
        id="albums"
        name="toggle"
        type="radio"
        checked={searchToggleValue === "albums"}
        onChange={() => handleClick("albums")}
      />
      <label htmlFor="albums" onClick={() => handleClick("albums")}>
        <h4>Albums</h4>
      </label>
      <input
        id="artists"
        name="toggle"
        type="radio"
        checked={searchToggleValue === "artists"}
        onChange={() => handleClick("artists")}
      />
      <label htmlFor="artists" onClick={() => handleClick("artists")}>
        <h4>Artists</h4>
      </label>
      <input
        id="playlists"
        name="toggle"
        type="radio"
        checked={searchToggleValue === "playlists"}
        onChange={() => handleClick("playlists")}
      />
      <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
        <h4>Playlists</h4>
      </label>
    </div>
  );
}

export default SearchToggle;
