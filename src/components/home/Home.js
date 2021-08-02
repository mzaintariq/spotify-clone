import React, { useEffect } from "react";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getFeatured } from "../../actions";
import Thumbnail from "../thumbnail/Thumbnail";

function Home() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.featuredReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (myState2.featuredPlaylists == null) {
      console.log("DISPATCHING");
      dispatch(getFeatured(myState.accessToken));
    }
  }, []);

  console.log("CHECK: ", myState2.featuredPlaylists);

  return (
    <div>
      {myState2.featuredPlaylists ? (
        <div className="container">
          <h2>Featured Playlists</h2>
          <div className="gallery">
            {myState2.featuredPlaylists.items.map((item, index) => (
              <Thumbnail key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div class="snippet" data-title=".dot-flashing">
            <div class="stage">
              <div class="dot-flashing"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
