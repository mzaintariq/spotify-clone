import React, { useEffect } from "react";
import "./Library.scss";

function Library() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        LIBRARY
        <h1>LIBRARY</h1>
      </div>
    </div>
  );
}

export default Library;
