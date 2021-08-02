import React, { useEffect } from "react";
import "./Playlist.scss";

function Playlist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      PLAYLIST
      <h1>PLAYLIST</h1>
    </div>
  );
}

export default Playlist;
