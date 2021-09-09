import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./ProfileTracks.module.scss";
import SongRow from "../SongRow";
import { userTopTracksSelector } from "../../reducers/userReducer";

function ProfileTracks() {
  const topTracks = useSelector(userTopTracksSelector);
  const [showAll, setShowAll] = useState(false);
  const tracksLength = showAll ? topTracks.items.length : 5;

  const handleClick = () => {
    var showAll = document.getElementById("showAll");
    if (showAll.innerHTML === "show all") {
      showAll.innerHTML = "show less";
      setShowAll(true);
    } else {
      showAll.innerHTML = "show all";
      setShowAll(false);
    }
  };

  return (
    <div className={styles.profile__songs}>
      <div className={styles.profile__songs__header}>
        <h2>Top Tracks</h2>
        <p id="showAll" onClick={() => handleClick()}>
          show all
        </p>
      </div>
      {topTracks && (
        <div className={styles.profile__songList}>
          {topTracks.items.slice(0, tracksLength).map((item, index) => (
            <SongRow key={item.id} track={item} id={index} type="single" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileTracks;
