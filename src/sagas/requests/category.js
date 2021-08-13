export function requestGetCategoryData(data) {
  return fetch(
    `https://api.spotify.com/v1/browse/categories/${data[1]}?country=PK`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${data[0]}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function requestGetCategoryPlaylists(data) {
  return fetch(
    `https://api.spotify.com/v1/browse/categories/${data[1]}/playlists?country=PK`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${data[0]}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
