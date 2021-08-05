import React, { useEffect } from "react";
import "./Artist.scss";

function Artist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      ARTIST
      <h1>ARTIST</h1>
    </div>
  );
}

export default Artist;
