import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./ProfilePlaylists.module.scss";
import PlaylistCard from "../PlaylistCard";
import {
  userDataSelector,
  userPlaylistsSelector,
} from "../../reducers/userReducer";

function ProfilePlaylists() {
  const userData = useSelector(userDataSelector);
  const playlists = useSelector(userPlaylistsSelector);

  return (
    <div className={styles.profile__artists}>
      <h2>Public Playlists</h2>
      {playlists && (
        <div className={styles.profile__artistGrid}>
          <Grid container justifyContent="flex-start" spacing={3}>
            {playlists.items
              .filter(
                (item) =>
                  item.public === true &&
                  item.owner.display_name === userData.display_name
              )
              .map((item) => (
                <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <PlaylistCard data={item} />
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default ProfilePlaylists;
