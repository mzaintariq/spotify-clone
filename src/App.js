import './App.scss';
import React, { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { getToken, getUserData } from './actions/index'

function App() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/")
    }
  }, [])

  // useEffect(async () => {
  //   const code = new URLSearchParams(window.location.search).get('code');
  //   if (code) {
  //     dispatch(getToken(code));
  //     window.history.pushState("", "", "/")
  //   }
  // }, [])

  return (
    <div className="app">
      {
        myState.accessToken ? (
          <Dashboard />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;