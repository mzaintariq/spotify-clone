import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./SearchPlaylists.module.scss";
import PlaylistCard from "../PlaylistCard";
import {
  searchPlaylistsSelector,
  searchValueSelector,
} from "../../reducers/searchReducer";

function SearchPlaylists() {
  const searchPlaylists = useSelector(searchPlaylistsSelector);
  const searchValue = useSelector(searchValueSelector);

  return (
    <div>
      {searchPlaylists.total ? (
        <div>
          <h2 className={styles.searchpage__body__title}>
            Playlists for "{searchValue}"
          </h2>
          <div className={styles.grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {searchPlaylists.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <div className={styles.noresult}>
          <h2>No playlists found for "{searchValue}"</h2>
          <h3>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </h3>
        </div>
      )}
    </div>
  );
}

export default SearchPlaylists;
