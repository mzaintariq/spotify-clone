import "./Dashboard.scss";
import React from "react";
import { useSelector } from "react-redux";
import { accessTokenSelector, expiresInSelector, refreshTokenSelector } from "../../reducers/authReducer";

function Dashboard() {
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);
  const expiresIn = useSelector(expiresInSelector);
  
  return (
    <div className="dashboard">
      <h1>Logged In!</h1>
      <h1>Access Token:</h1>
      <p>{accessToken}</p>
      <h1>Refresh Token:</h1>
      <p>{refreshToken}</p>
      <h1>Expires In:</h1>
      <p>{expiresIn}</p>
    </div>
  );
}

export default Dashboard;
