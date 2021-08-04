import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../searchBar/SearchBar";
import "./Search.scss";

function Search() {
  const myState = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(myState.searchResult);

  return (
    <div className="searchpage">
      <SearchBar />
      {/* <div className="searchpage__error">
        <h2>No Results Found for "{myState.searchValue}"</h2>
      </div> */}

      {myState.searchValue ? (
        <div className="searchpage__error">
          <h2>Searching for: "{myState.searchValue}"</h2>
        </div>
      ) : (
        <div>
          <h1>LANDING PAGE</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
