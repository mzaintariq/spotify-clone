import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import Home from "./Home";
import SearchBar from "./Search/SearchBar";
import SearchToggle from "./Search/SearchToggle";
import SearchTracks from "./Search/SearchTracks";
import SearchAlbums from "./Search/SearchAlbums";
import SearchArtists from "./Search/SearchArtists";
import SearchPlaylists from "./Search/SearchPlaylists";
import { setSearchToggle } from "../actions";
import {
  searchToggleValueSelector,
  searchValueSelector,
} from "../reducers/searchReducer";

function Search() {
  const searchToggleValue = useSelector(searchToggleValueSelector);
  const searchValue = useSelector(searchValueSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setSearchToggle(searchToggleValue));
  }, [dispatch, searchToggleValue]);

  return (
    <div className={styles.searchpage}>
      <div className={styles.searchpage__header}>
        <SearchBar />
        <SearchToggle />
      </div>

      {searchValue ? (
        <div className={styles.searchpage__body}>
          {searchToggleValue === "tracks" && <SearchTracks />}
          {searchToggleValue === "albums" && <SearchAlbums />}
          {searchToggleValue === "artists" && <SearchArtists />}
          {searchToggleValue === "playlists" && <SearchPlaylists />}
        </div>
      ) : (
        <div className={styles.nosearch}>
          <Home />
        </div>
      )}
    </div>
  );
}

export default Search;
