import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./LibraryAlbums.module.scss";
import AlbumCard from "../AlbumCard";
import { libraryAlbumsSelector } from "../../reducers/libraryReducer";

function LibraryAlbums() {
  const libraryAlbums = useSelector(libraryAlbumsSelector);

  return (
    <div>
      {libraryAlbums && (
        <div>
          <h2 className={styles.library__body__title}>Saved Albums</h2>
          <div className={styles.library__grid}>
            <Grid container justifyContent="flex-start" spacing={3}>
              {libraryAlbums.items.map((item, index) => (
                <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <AlbumCard data={item.album} type="newreleases" />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}

export default LibraryAlbums;
