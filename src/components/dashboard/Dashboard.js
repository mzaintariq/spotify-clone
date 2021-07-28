import './Dashboard.scss';
import React, { useEffect } from 'react';
// import Search from '../search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../actions/index'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Profile from '../profile/Profile'
import Search from '../search/Search'
import Library from '../library/Library'


function Dashboard() {
  // const myState = useSelector((state) => state.userReducer);
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(myState.accessToken));
  }, [])

  console.log("CHECK: ", myState)
  console.log("CHECK 2: ", myState2)

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