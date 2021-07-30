import React, { useCallback } from 'react'
import './Player.scss'
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import { useSelector, useDispatch } from 'react-redux';
import SongTitle from './SongTitle';
import TogglePlay from './TogglePlay';

function Player() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const getOAuthToken = useCallback(callback => callback(myState.accessToken), []);

  return (
    <div className="player">
      {/* <h2>Player</h2> */}
      <WebPlaybackSDK
        deviceName="CHECKING"
        getOAuthToken={getOAuthToken}
        volume={0.5}>
        <TogglePlay />
        <SongTitle />
      </WebPlaybackSDK>
      Hello
    </div>
  )
}

export default Player


// const MySpotifyPlayer: React.VFC = () => {

// };