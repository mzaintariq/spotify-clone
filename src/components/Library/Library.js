import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./Library.module.scss";
import { getLibraryData } from "../../actions";
import {
  isLoadingSelector,
  libraryToggleValueSelector,
} from "../../reducers/libraryReducer";
import { accessTokenSelector } from "../../reducers/authReducer";
import LibraryToggle from "./LibraryToggle";
import LibraryTracks from "./LibraryTracks";
import LibraryAlbums from "./LibraryAlbums";
import LibraryArtists from "./LibraryArtists";
import LibraryPlaylists from "./LibraryPlaylists";
import Loading from "../Loading";

function Library({
  accessToken,
  libraryToggleValue,
  isLoading,
  getLibraryData,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    getLibraryData(accessToken);
  }, [getLibraryData, accessToken]);

  return (
    <div className={styles.library}>
      <div className={styles.library__header}>
        <LibraryToggle />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {libraryToggleValue === "tracks" && <LibraryTracks />}
          {libraryToggleValue === "albums" && <LibraryAlbums />}
          {libraryToggleValue === "artists" && <LibraryArtists />}
          {libraryToggleValue === "playlists" && <LibraryPlaylists />}
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    accessToken: accessTokenSelector(state),
    libraryToggleValue: libraryToggleValueSelector(state),
    isLoading: isLoadingSelector(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLibraryData: (accessToken) => dispatch(getLibraryData(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);