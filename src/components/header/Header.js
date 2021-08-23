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
import OptionProfile from "../optionProfile/OptionProfile";

function Header() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData(accessToken));
    }
  }, [dispatch, accessToken]);

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
          {/* {userData ? (
            <Option
              imgUrl={userData.images[0].url}
              text={userData.display_name}
              to="/profile"
            />
          ) : (
            <Option Icon={AccountCircleIcon} text="Profile" to="/profile" />
          )} */}
          {userData ? (
            <OptionProfile
              imgUrl={userData.images[0].url}
              text={userData.display_name}
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
