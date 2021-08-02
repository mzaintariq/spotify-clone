import './Dashboard.scss';
import React from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="dashboard">
      <h1>Logged In!</h1>
      <h1>Access Token:</h1>
      <p>{myState.accessToken}</p>
      <h1>Refresh Token:</h1>
      <p>{myState.refreshToken}</p>
      <h1>Expires In:</h1>
      <p>{myState.expiresIn}</p>
    </div>
  );
}

export default Dashboard;