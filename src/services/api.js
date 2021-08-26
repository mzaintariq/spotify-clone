import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../setting";

export function requestGetToken(code) {
  const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then((response) => response.json());
}

export function requestGetFeatured(accessToken) {
  return fetch(
    "https://api.spotify.com/v1/browse/featured-playlists?country=PK",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function requestGetNewReleases(accessToken) {
  return fetch("https://api.spotify.com/v1/browse/new-releases?country=PK", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function requestGetUserData(accessToken) {
  return fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
