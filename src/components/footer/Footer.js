import React, { useState, useEffect } from "react";
import "./Footer.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.playlistReducer);
  const myState3 = useSelector((state) => state.currentReducer);
  const dispatch = useDispatch();

  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(true);
  }, [myState3]);

  // console.log("CHECK PLAYER TOKEN: ", myState.accessToken);
  // console.log("CHECK CURRENT: ", myState3.currentPlaying);
  // console.log("CHECK PLAYER TOKEN 2: ", myState2.playlistData.tracks.items[0].track.uri)

  return (
    <div className="footer">
      {/* <h2>Footer</h2> */}
      {/* Footer */}

      <div className="player">
        <SpotifyPlayer
          token={myState.accessToken}
          initialVolume={0.5}
          callback={state => {
            if (!state.isPlaying) setPlay(false)
          }}
          play={play}
          
          // uris={["spotify:track:0MWiSBKm8Avs8iDIxcertp",myState2.playlistData.tracks.items[0].track.uri]}
          // uris={myState2.playlistData.tracks.items[0].track.uri ? [myState2.playlistData.tracks.items[0].track.uri] : []}
          // uris={myState2.playlistData.tracks.items[0].track.uri ? myState2.playlistData.tracks.items.map((item) => item.track.uri).join(", ") : []}
          uris={myState3.currentPlaying ? myState3.currentPlaying : []}
          styles={{
            activeColor: "#1cb954",
            bgColor: "#181818",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            sliderTrackColor: "#363636",
            sliderHandleColor: "#fff",
            trackArtistColor: "#888888",
            trackNameColor: "#fff",
          }}
        />
      </div>
      

      {/* <SpotifyPlayer
        token={myState.accessToken}
        uris={["spotify:track:0MWiSBKm8Avs8iDIxcertp"]}
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      /> */}
    </div>
  );
}

export default Footer;
