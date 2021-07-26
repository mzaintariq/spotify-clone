import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Login from './components/login/Login';
import './App.css';
import { getToken } from './api/spotify/spotify';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setAccessToken, setExpiresIn, setRefreshToken } from './actions/index'

function App() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const hash = getTokenFromUrl();
  //   window.location.hash = "";
  //   const token = hash.access_token;

  //   if (token) {
  //     dispatch(setToken(token));
  //   }

  //   console.log("Check hash: ", hash);
  //   console.log("Check Token: ", token);
  // }, [])

  useEffect(async () => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      const data = await getToken();
      // const data = await fetchToken(code);
      dispatch(setAccessToken(data.access_token));
      dispatch(setRefreshToken(data.refresh_token));
      dispatch(setExpiresIn(data.expires_in));
      window.history.pushState("", "", "/")
    }
  }, [])

  // const fetchToken = async (code) => {
  //   try {
  //     const clientId = "9c2b9616464949a9a3e68c21250663a0";
  //     const clientSecret = "a866fad991494333ae0dcb8f7fef0fcf";
  //     const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=${clientId}&client_secret=${clientSecret}`
  //     const response = await fetch('https://accounts.spotify.com/api/token', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: formBody
  //     });
  //     const data = await response.json();
  //     console.log("CHECK DATA: ", data)
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // const fetchToken = async (code) => {
  //   try {
  //     const clientId = "9c2b9616464949a9a3e68c21250663a0";
  //     const clientSecret = "a866fad991494333ae0dcb8f7fef0fcf";
  //     const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=${clientId}&client_secret=${clientSecret}`
  //     const response = await fetch('https://accounts.spotify.com/api/token', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: formBody
  //     });
  //     const data = await response.json();
  //     console.log("CHECK DATA: ", data)
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }



  // const fetchMedia = async (code) => {
  //   try {
  //     const clientId = "9c2b9616464949a9a3e68c21250663a0";
  //     const clientSecret = "a866fad991494333ae0dcb8f7fef0fcf";
  //     const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=${clientId}&client_secret=${clientSecret}`
  //     const response = await fetch('https://accounts.spotify.com/api/token', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       },
  //       body: formBody
  //     });
  //     const data = await response.json();
  //     console.log("CHECK DATA: ", data)
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <div className="app">
      {
        myState.accessToken ? (
          // <h1>Logged In!!!</h1>
          <Header />
        ) : (
          <Login />
        )
      }
      {/* <Login /> */}
      {/* {myState.token} */}
    </div>
  );
}

export default App;