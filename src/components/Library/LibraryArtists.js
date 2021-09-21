import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./LibraryArtists.module.scss";
import ArtistCard from "../ArtistCard";
import Loading from "../Loading";
import { getLibraryArtists } from "../../actions";
import {
  isLoadingArtistsSelector,
  libraryArtistsSelector,
} from "../../reducers/libraryReducer";
import { accessTokenSelector } from "../../reducers/authReducer";

function LibraryArtists() {
  const accessToken = useSelector(accessTokenSelector);
  const libraryArtists = useSelector(libraryArtistsSelector);
  const isLoading = useSelector(isLoadingArtistsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getLibraryArtists(accessToken));
  }, [accessToken, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
