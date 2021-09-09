import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./LibraryToggle.module.scss";
import { setLibraryToggle } from "../../actions";
import { libraryToggleValueSelector } from "../../reducers/libraryReducer";

function LibraryToggle() {
  const libraryToggleValue = useSelector(libraryToggleValueSelector);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setLibraryToggle(value));
  };

  return (
    <div className={styles.library__toggle}>
      <input
        id="tracks"
        name="toggle"
        type="radio"
        checked={libraryToggleValue === "tracks"}
        onChange={() => handleClick("tracks")}
      />
      <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
        <h4>Songs</h4>
      </label>
      <input
        id="albums"
        name="toggle"
        type="radio"
        checked={libraryToggleValue === "albums"}
        onChange={() => handleClick("albums")}
      />
      <label htmlFor="albums" onClick={() => handleClick("albums")}>
        <h4>Albums</h4>
      </label>
      <input
        id="artists"
        name="toggle"
        type="radio"
        checked={libraryToggleValue === "artists"}
        onChange={() => handleClick("artists")}
      />
      <label htmlFor="artists" onClick={() => handleClick("artists")}>
        <h4>Artists</h4>
      </label>
      <input
        id="playlists"
        name="toggle"
        type="radio"
        checked={libraryToggleValue === "playlists"}
        onChange={() => handleClick("playlists")}
      />
      <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
        <h4>Playlists</h4>
      </label>
    </div>
  );
}

export default LibraryToggle;
