import React from "react";
import "./Footer.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.playlistReducer);
  const dispatch = useDispatch();

  console.log("CHECK PLAYER TOKEN: ", myState.accessToken);
  // console.log("CHECK PLAYER TOKEN 2: ", myState2.playlistData.tracks.items[0].track.uri)

  return (
    <div className="footer">
      {/* <h2>Footer</h2> */}
      {/* Footer */}
      <SpotifyPlayer
        token={myState.accessToken}
        uris={[
          "spotify:track:0MWiSBKm8Avs8iDIxcertp",
          "myState2.playlistData.tracks.items[1].track.uri",
        ]}
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
}

export default Footer;
