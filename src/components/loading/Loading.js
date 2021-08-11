import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="container__dots">
      <div className="snippet" data-title=".dot-flashing">
        <div className="stage">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
