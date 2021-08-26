import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./Home.module.scss";
import Loading from "../loading/Loading";
import PlaylistCard from "../playlistCard/PlaylistCard";
import AlbumCard from "../albumCard/AlbumCard";
import { getFeatured, getNewReleases } from "../../actions";
import { accessTokenSelector } from "../../reducers/authReducer";
import {
  featuredPlaylistSelector,
  isLoadingSelector,
  newreleasesPlaylistSelector,
} from "../../reducers/browseReducer";

function Home() {
  const accessToken = useSelector(accessTokenSelector);
  const featuredPlaylists = useSelector(featuredPlaylistSelector);
  const newreleasesPlaylists = useSelector(newreleasesPlaylistSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (featuredPlaylists == null) {
      dispatch(getFeatured(accessToken));
      dispatch(getNewReleases(accessToken));
    }
  }, [dispatch, accessToken, featuredPlaylists]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {featuredPlaylists && (
            <div className={styles.homepage}>
              <h2>Featured Playlists</h2>
              <div className={styles.grid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {featuredPlaylists.items.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          )}
          {newreleasesPlaylists && (
            <div className={styles.homepage}>
              <h2>New Releases</h2>
              <div className={styles.grid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {newreleasesPlaylists.items.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <AlbumCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
