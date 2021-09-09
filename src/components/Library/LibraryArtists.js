import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./LibraryArtists.module.scss";
import ArtistCard from "../ArtistCard";
import { libraryArtistsSelector } from "../../reducers/libraryReducer";

function LibraryArtists() {
  const libraryArtists = useSelector(libraryArtistsSelector);

  return (
    <div>
      {libraryArtists && (
        <div>
          <h2 className={styles.library__body__title}>Followed Artists</h2>
          <div className={styles.library__grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {libraryArtists.artists.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <ArtistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}

export default LibraryArtists;
