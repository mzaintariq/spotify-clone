import React, { useEffect } from "react";
import "./Profile.scss";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        PROFILE
        <h1>PROFILE</h1>
      </div>
    </div>
  );
}

export default Profile;
