import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./SearchArtists.module.scss";
import ArtistCard from "../ArtistCard";
import {
  searchArtistsSelector,
  searchValueSelector,
} from "../../reducers/searchReducer";

function SearchArtists() {
  const searchArtists = useSelector(searchArtistsSelector);
  const searchValue = useSelector(searchValueSelector);

  return (
    <div>
      {searchArtists.total ? (
        <div>
          <h2 className={styles.searchpage__body__title}>
            Artists for "{searchValue}"
          </h2>
          <div className={styles.grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {searchArtists.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <ArtistCard data={item} type="newreleases" />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <div className={styles.noresult}>
          <h2>No artists found for "{searchValue}"</h2>
          <h3>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </h3>
        </div>
      )}
    </div>
  );
}

export default SearchArtists;
