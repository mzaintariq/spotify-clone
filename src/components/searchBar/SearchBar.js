import SearchIcon from "@material-ui/icons/Search";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult } from "../../actions";
import "./SearchBar.scss";

function SearchBar() {
  const [value, setValue] = useState("");
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // console.log(`I can see you're not typing. I can use "${value}" now!`);
      // dispatch(setSearch(value));
      dispatch(getSearchResult([myState.accessToken, value]));
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
