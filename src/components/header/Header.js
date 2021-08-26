import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import styles from "./Header.module.scss";
import Option from "../option/Option";
import { accessTokenSelector } from "../../reducers/authReducer";
import {
  isLoadingSelector,
  userDataSelector,
} from "../../reducers/userReducer";
import { getUserData } from "../../actions";

import { ReactComponent as SpotifyLogo } from "../../assets/SpotifyLogo.svg";

function Header() {
  const accessToken = useSelector(accessTokenSelector);
  const userData = useSelector(userDataSelector);
  const isLoadingUser = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData(accessToken));
    }
  }, [dispatch, accessToken]);

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.header__logo} to="/">
          <SpotifyLogo width="150px" height="63px" viewBox="0 -35 800 300" />
        </Link>
        <nav className={styles.header__nav}>
          <Option Icon={HomeIcon} text="Home" to="/" />
          <Option Icon={SearchIcon} text="Search" to="/search" />
          <Option Icon={LibraryMusicIcon} text="My Library" to="/library" />
          {isLoadingUser ? (
            <Option Icon={AccountCircleIcon} text="Profile" to="/profile" />
          ) : (
            <Option
              imgUrl={userData.images[0].url}
              text={userData.display_name}
              to="/profile"
            />
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
