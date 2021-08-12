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

export function requestGetUserTopTracks(accessToken) {
  return fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50",
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

export function requestGetUserTopArtists(accessToken) {
  return fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50",
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

export function requestGetUserPlaylists(accessToken) {
  return fetch("https://api.spotify.com/v1/me/playlists", {
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
