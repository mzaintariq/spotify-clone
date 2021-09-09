import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./SearchAlbums.module.scss";
import AlbumCard from "../AlbumCard";
import { searchAlbumsSelector, searchValueSelector } from "../../reducers/searchReducer";

function SearchAlbums() {
  const searchAlbums = useSelector(searchAlbumsSelector);
  const searchValue = useSelector(searchValueSelector);

  return (
    <div>
      {searchAlbums.total ? (
        <div>
          <h2 className={styles.searchpage__body__title}>
            Albums for "{searchValue}"
          </h2>
          <div className={styles.grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {searchAlbums.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <AlbumCard data={item} type="newreleases" />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <div className={styles.noresult}>
          <h2>No albums found for "{searchValue}"</h2>
          <h3>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </h3>
        </div>
      )}
    </div>
  );
}

export default SearchAlbums;
