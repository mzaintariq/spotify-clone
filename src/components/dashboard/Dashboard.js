import './Dashboard.scss';
import React, { useEffect } from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../actions/index'

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer'

import Home from '../home/Home'
import Profile from '../profile/Profile'
import Search from '../search/Search'
import Library from '../library/Library'


function Dashboard() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const profiledata = await getProfile();
    dispatch(setUserData(profiledata));
    console.log("EFFECT: ", profiledata);
  }, [])

  const getProfile = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: 'GET',
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${myState.accessToken}`,
          "Content-Type": "application/json"
        }
      })
      const data = await response.json();
      console.log("CHECK DATA: ", data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Router>
        <Header />
        <div className="homepage">
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
        
        <Footer />
      </Router>
    
      {/* <div className="dashboard">
        <h1>Logged In!</h1>
        <h1>Access Token:</h1>
        <p>{myState.accessToken}</p>
        <h1>Refresh Token:</h1>
        <p>{myState.refreshToken}</p>
        <h1>Expires In:</h1>
        <p>{myState.expiresIn}</p>
      </div> */}
    </>
  );
}

export default Dashboard;