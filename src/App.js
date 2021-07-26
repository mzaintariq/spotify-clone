import './App.css';
import React, { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { getToken } from './api/spotify/spotify';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken, setExpiresIn, setRefreshToken } from './actions/index'

function App() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      const data = await getToken(code);
      dispatch(setAccessToken(data.access_token));
      dispatch(setRefreshToken(data.refresh_token));
      dispatch(setExpiresIn(data.expires_in));
      window.history.pushState("", "", "/")
    }
  }, [])

  return (
    <div className="app">
      {
        myState.accessToken ? (
          // <h1>Logged In!!!</h1>
          <Dashboard />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;