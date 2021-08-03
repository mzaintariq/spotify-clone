import React, { useState, useEffect } from "react";
import "./Footer.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.currentReducer);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [myState2]);
  
  return (
    <div className="footer">
      <div className="player">
        <SpotifyPlayer
          token={myState.accessToken}
          initialVolume={0.5}
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
          }}
          play={play}
          magnifySliderOnHover={true}
          offset={myState2.currentNumber}
          // showSaveIcon={true}
          uris={myState2.currentArray ? myState2.currentArray : []}
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
