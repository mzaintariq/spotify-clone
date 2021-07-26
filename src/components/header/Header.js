import './Header.scss';
import React from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="header">
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

export default Header;