import React, { useEffect } from "react";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getFeatured, getNewReleases } from "../../actions";
import Loading from "../loading/Loading";
import PlaylistCard from "../playlistCard/PlaylistCard";
import AlbumCard from "../albumCard/AlbumCard";
import { Grid } from "@material-ui/core";

function Home() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const featuredPlaylists = useSelector((state) => state.browseReducer.featuredPlaylists);
  const newreleasesPlaylists = useSelector((state) => state.browseReducer.newreleasesPlaylists);
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
      {featuredPlaylists ? (
        <div className="homepage">
          <h2>Featured Playlists</h2>
          <div className="grid">
            <Grid container justifyContent="flex-start" spacing={3}>
              {featuredPlaylists.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {newreleasesPlaylists ? (
        <div className="homepage">
          <h2>New Releases</h2>
          <div className="grid">
            <Grid container justifyContent="flex-start" spacing={3}>
              {newreleasesPlaylists.items.map((item, index) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <AlbumCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
