import './Header.scss';
import React from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';
// import { checkAction } from '../../actions/index'

function Header() {
  const myState = useSelector((state) => state.check);
  const myState2 = useSelector((state) => state.loginReducer);
  const myState3 = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>Access Token:</h1>
      <p>{myState3.accessToken}</p>
      <h1>Refresh Token:</h1>
      <p>{myState3.refreshToken}</p>
      <h1>Expires In:</h1>
      <p>{myState3.expiresIn}</p>

      {/* <h1>Hello</h1>
      <h2>{myState.name}</h2>
      <h2>{myState.value}</h2>
      <button onClick = {() => dispatch(checkAction)}>CHECK</button> */}
    </div>
  );
}

export default Header;