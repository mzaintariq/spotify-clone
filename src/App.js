import './App.css';
import React, { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from './actions/index'

function App() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/")
    }
  }, [])

  console.log("CHECK FINAL: ", myState.accessToken);

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