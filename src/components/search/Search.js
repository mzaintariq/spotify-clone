import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import SearchBar from "./SearchBar";
import SearchToggle from "./SearchToggle";
import SearchTracks from "./SearchTracks";
import SearchAlbums from "./SearchAlbums";
import SearchArtists from "./SearchArtists";
import SearchPlaylists from "./SearchPlaylists";
import NoSearch from "./NoSearch";
import { setSearchToggle } from "../../actions";
import {
  searchToggleValueSelector,
  searchValueSelector,
} from "../../reducers/searchReducer";

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
        <NoSearch />
      )}
    </div>
  );
}

export default Search;
