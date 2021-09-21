import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./LibraryAlbums.module.scss";
import AlbumCard from "../AlbumCard";
import Loading from "../Loading";
import { getLibraryAlbums } from "../../actions";
import {
  isLoadingAlbumsSelector,
  libraryAlbumsSelector,
} from "../../reducers/libraryReducer";
import { accessTokenSelector } from "../../reducers/authReducer";

function LibraryAlbums({
  accessToken,
  isLoading,
  libraryAlbums,
  getLibraryAlbums,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    getLibraryAlbums(accessToken);
  }, [accessToken, getLibraryAlbums]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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

function mapStateToProps(state) {
  return {
    accessToken: accessTokenSelector(state),
    libraryAlbums: libraryAlbumsSelector(state),
    isLoading: isLoadingAlbumsSelector(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLibraryAlbums: (accessToken) => dispatch(getLibraryAlbums(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryAlbums);
