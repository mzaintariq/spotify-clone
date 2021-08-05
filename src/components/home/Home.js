import React, { useEffect } from "react";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getFeatured, getNewReleases } from "../../actions";
import Loading from "../loading/Loading";
import PlaylistCard from "../playlistCard/PlaylistCard";
import AlbumCard from "../albumCard/AlbumCard";
import { Grid } from "@material-ui/core";

function Home() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.browseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (myState2.featuredPlaylists == null) {
      dispatch(getFeatured(myState.accessToken));
      dispatch(getNewReleases(myState.accessToken));
    }
  }, []);

  return (
    <div>
      {myState2.featuredPlaylists ? (
        <div className="homepage">
          <h2>Featured Playlists</h2>
          <div className="grid">
            <Grid container justifyContent="flex-start" spacing={3}>
              {myState2.featuredPlaylists.items.map((item, index) => (
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
      {myState2.newreleasesPlaylists ? (
        <div className="homepage">
          <h2>New Releases</h2>
          <div className="grid">
            <Grid container justifyContent="flex-start" spacing={3}>
              {myState2.newreleasesPlaylists.items.map((item, index) => (
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
