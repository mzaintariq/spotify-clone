import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SpotifyLogo from "../../assets/spotifylogo.jpeg";
import Option from "../option/Option";

import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../actions";

function Header() {
  const myState2 = useSelector((state) => state.authReducer);
  const myState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (myState2.accessToken) {
      dispatch(getUserData(myState2.accessToken));
    }
  }, [myState2]);

  return (
    <div>
      <header className="header">
        <Link className="header__logo" to="/">
          <img src={SpotifyLogo} alt="Logo" />
        </Link>
        <div className="header__nav">
          <Option Icon={HomeIcon} text="Home" to="/" />
          <Option Icon={SearchIcon} text="Search" to="/search" />
          <Option Icon={LibraryMusicIcon} text="My Library" to="/library" />
          {myState.userData ? (
            <Option
              imgUrl={myState.userData.images[0].url}
              text={myState.userData.display_name}
              to="/profile"
            />
          ) : (
            <Option Icon={AccountCircleIcon} text="Profile" to="/profile" />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
