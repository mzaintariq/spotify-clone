import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { login } from "./Login.module.scss";
import { getToken } from "../actions/index";

import SpotifyLogo from "../assets/SpotifyLogo.svg";
import { CLIENT_ID, REDIRECT_URI } from "../setting";

const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "playlist-read-private",
];
const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}&response_type=code&show_dialogue=true`;

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/");
    }
  }, [dispatch]);

  return (
    <div className={login}>
      <img src={SpotifyLogo} alt="" />
      <a href={LOGIN_URL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;