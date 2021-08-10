export function requestGetArtist(data) {
  return fetch(`https://api.spotify.com/v1/artists/${data[1]}?market=PK`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${data[0]}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function requestGetArtistTopTracks(data) {
  return fetch(`https://api.spotify.com/v1/artists/${data[1]}/top-tracks?market=PK`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${data[0]}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function requestGetArtistAlbums(data) {
  return fetch(`https://api.spotify.com/v1/artists/${data[1]}/albums?market=PK&limit=50`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${data[0]}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
