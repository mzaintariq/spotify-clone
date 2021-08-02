import "./App.scss";
import React, { useEffect } from "react";
import Login from "./components/login/Login";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/");
    }
  }, []);

  return (
    <div className="app">
      {myState.accessToken ? (
        // <Dashboard />
        <div className="dashboard">
          <h1>Logged In!</h1>
          <h1>Access Token:</h1>
          <p>{myState.accessToken}</p>
          <h1>Refresh Token:</h1>
          <p>{myState.refreshToken}</p>
          <h1>Expires In:</h1>
          <p>{myState.expiresIn}</p>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
