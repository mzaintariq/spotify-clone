import React, { useState, useEffect } from "react";
import "./Footer.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

function Footer() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentNumber = useSelector((state) => state.currentReducer.currentNumber);
  const currentArray = useSelector((state) => state.currentReducer.currentArray);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [currentArray]);
  
  return (
    <div className="footer">
      <div className="player">
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
