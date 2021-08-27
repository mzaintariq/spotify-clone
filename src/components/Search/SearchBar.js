import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";

import styles from "./SearchBar.module.scss";
import { getSearchResult, setSearch } from "../../actions";
import { accessTokenSelector } from "../../reducers/authReducer";
import { searchValueSelector } from "../../reducers/searchReducer";

function SearchBar() {
  const accessToken = useSelector(accessTokenSelector);
  const searchValue = useSelector(searchValueSelector);
  const [value, setValue] = useState(searchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) {
        dispatch(getSearchResult([accessToken, value]));
      } else {
        dispatch(
          setSearch([
            value,
            { albums: null, tracks: null, playlists: null, artists: null },
          ])
        );
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [value, dispatch, accessToken]);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <SearchIcon className={styles.searchbar__icon} />
      <input
        className={styles.searchbar__input}
        onChange={handleOnChange}
        value={value}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
