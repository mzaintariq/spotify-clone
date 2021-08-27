import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SpotifyPlayer from "react-spotify-web-playback";

import styles from "./Footer.module.scss";
import { accessTokenSelector } from "../reducers/authReducer";
import { currentArraySelector, currentNumberSelector } from "../reducers/currentReducer";

function Footer() {
  const accessToken = useSelector(accessTokenSelector);
  const currentNumber = useSelector(currentNumberSelector);
  const currentArray = useSelector(currentArraySelector);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [currentArray]);
  
  return (
    <div className={styles.footer}>
      <div className={styles.player}>
        <SpotifyPlayer
          token={accessToken}
          initialVolume={0.5}
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
          }}
          play={play}
          magnifySliderOnHover={true}
          offset={currentNumber}
          // showSaveIcon={true}
          uris={currentArray ? currentArray : []}
          styles={{
            bgColor: "#181818",
            color: "#fff",
            trackArtistColor: "#888888",
            trackNameColor: "#fff",
            loaderColor: "#fff",
            activeColor: "#1cb954",
            sliderColor: "#1cb954",
            sliderTrackColor: "#363636",
            sliderHandleColor: "#fff",
            height: 60,
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
