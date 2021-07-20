// import './Header.scss';
import React from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { checkAction } from '../../actions/index'

function Header() {
  const myState = useSelector((state) => state.check);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{myState.name}</h2>
      <h2>{myState.value}</h2>
      <button onClick = {() => dispatch(checkAction)}>CHECK</button>
    </div>
  );
}

export default Header;