import SearchIcon from "@material-ui/icons/Search";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult, setSearch } from "../../actions";
import "./SearchBar.scss";

function SearchBar() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.searchReducer);
  const [value, setValue] = useState(myState2.searchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) {
        dispatch(getSearchResult([myState.accessToken, value]));
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
  }, [value]);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchbar">
      <SearchIcon className="searchbar__icon" />
      <input
        className="searchbar__input"
        onChange={handleOnChange}
        value={value}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
