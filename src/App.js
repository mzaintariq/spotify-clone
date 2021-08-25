import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import { accessTokenSelector } from "./reducers/authReducer";

function App() {
  const accessToken = useSelector(accessTokenSelector);

  return <div className="app">{accessToken ? <Dashboard /> : <Login />}</div>;
}

export default App;
