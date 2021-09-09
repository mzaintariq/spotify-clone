import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./LibraryPlaylists.module.scss";
import PlaylistCard from "../PlaylistCard";
import {
  privateLibraryPlaylistsSelector,
  publicLibraryPlaylistsSelector,
  savedLibraryPlaylistsSelector,
} from "../../reducers/libraryReducer";

function LibraryPlaylists() {
  const publicLibraryPlaylists = useSelector(publicLibraryPlaylistsSelector);
  const privateLibraryPlaylists = useSelector(privateLibraryPlaylistsSelector);
  const savedLibraryPlaylists = useSelector(savedLibraryPlaylistsSelector);

  return (
    <div>
      {publicLibraryPlaylists && (
        <div>
          {publicLibraryPlaylists.length > 0 ? (
            <h2 className={styles.library__body__title}>Public Playlists</h2>
          ) : (
            <></>
          )}
          <div className={styles.library__grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {publicLibraryPlaylists.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
      {privateLibraryPlaylists && (
        <div>
          {privateLibraryPlaylists.length > 0 ? (
            <h2 className={styles.library__body__title}>Private Playlists</h2>
          ) : (
            <></>
          )}
          <div className={styles.library__grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {privateLibraryPlaylists.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
      {savedLibraryPlaylists && (
        <div>
          {savedLibraryPlaylists.length > 0 ? (
            <h2 className={styles.library__body__title}>Saved Playlists</h2>
          ) : (
            <></>
          )}
          <div className={styles.library__grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {savedLibraryPlaylists.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}

export default LibraryPlaylists;
