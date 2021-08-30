import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./ProfileArtists.module.scss";
import ArtistCard from "../ArtistCard";
import {
  userTopArtistsSelector,
} from "../../reducers/userReducer";

function ProfileArtists() {
  const topArtists = useSelector(userTopArtistsSelector);
  const [showAll, setShowAll] = useState(false);
  const artistsLength = showAll ? topArtists.items.length : 6;

  const handleClick = () => {
    var showAllArtists = document.getElementById("showAllArtists");
    if (showAllArtists.innerHTML === "show all") {
      showAllArtists.innerHTML = "show less";
      setShowAll(true);
    } else {
      showAllArtists.innerHTML = "show all";
      setShowAll(false);
    }
  };

  return (
    <div className={styles.profile__artists}>
      <div className={styles.profile__songs__header}>
        <h2>Top Artists</h2>
        <p id="showAllArtists" onClick={() => handleClick()}>
          show all
        </p>
      </div>
      {topArtists && (
        <div className={styles.profile__artistGrid}>
          <Grid container justifyContent="flex-start" spacing={3}>
            {topArtists.items.slice(0, artistsLength).map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                <ArtistCard data={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default ProfileArtists;
