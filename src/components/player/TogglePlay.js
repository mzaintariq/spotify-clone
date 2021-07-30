import React from 'react'
import { useSpotifyPlayer } from "react-spotify-web-playback-sdk";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { useSelector, useDispatch } from 'react-redux';


function TogglePlay() {
  const player = useSpotifyPlayer();

  // if (player === null) return null;


  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.playlistReducer);
  const dispatch = useDispatch();


  // const SPOTIFY_URI = "spotify:track:7xGfFoTpQ2E7fRF5lN10tr";
  const device = usePlayerDevice();
  const SPOTIFY_URI = myState2.playlistData.tracks.items[0].track.uri;

  console.log("CHECKKKK: ", myState2.playlistData.tracks.items[0].track.uri)

  
  const playCarlyRaeJepsen = (() => {
    console.log("CHECKKKKKKKKKKKKKKK")
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: [SPOTIFY_URI] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myState.accessToken}`,
        },
      },
    );
  }, [])

  return (
    <div>
      <button onClick={() => player.pause()}>pause</button>
      <button onClick={() => player.resume()}>resume</button>
      <button onClick={() => {
        fetch(
          `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
          {
            method: "PUT",
            body: JSON.stringify({ uris: [SPOTIFY_URI] }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${myState.accessToken}`,
            },
          },
        )
      }}>Play</button>
    </div>
  );
}

export default TogglePlay