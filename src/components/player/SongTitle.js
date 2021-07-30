import React from 'react'
import { usePlaybackState } from "react-spotify-web-playback-sdk";

function SongTitle() {
  const playbackState = usePlaybackState();

  if (playbackState === null) return null;

  return (
    <div>
      <p>{playbackState.track_window.current_track.name}</p>
    </div>
  )
}

export default SongTitle
