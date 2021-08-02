import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="container__dots">
      <div class="snippet" data-title=".dot-flashing">
        <div class="stage">
          <div class="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
