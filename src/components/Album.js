import React, { useEffect } from "react";
import "./Album.scss";

function Album() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      ALBUM
      <h1>ALBUM</h1>
    </div>
  );
}

export default Album;
