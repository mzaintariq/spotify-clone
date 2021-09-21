import React from "react";
import { connect } from "react-redux";

import styles from "./Library.module.scss";
import { libraryToggleValueSelector } from "../../reducers/libraryReducer";
import LibraryToggle from "./LibraryToggle";
import LibraryTracks from "./LibraryTracks";
import LibraryAlbums from "./LibraryAlbums";
import LibraryArtists from "./LibraryArtists";
import LibraryPlaylists from "./LibraryPlaylists";

function Library({ libraryToggleValue }) {
  return (
    <div className={styles.library}>
      <div className={styles.library__header}>
        <LibraryToggle />
      </div>
      <>
        {libraryToggleValue === "tracks" && <LibraryTracks />}
        {libraryToggleValue === "albums" && <LibraryAlbums />}
        {libraryToggleValue === "artists" && <LibraryArtists />}
        {libraryToggleValue === "playlists" && <LibraryPlaylists />}
      </>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    libraryToggleValue: libraryToggleValueSelector(state),
  };
}

export default connect(mapStateToProps)(Library);
