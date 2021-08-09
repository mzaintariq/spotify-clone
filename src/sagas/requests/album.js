export function requestGetAlbum(data) {
  return fetch(`https://api.spotify.com/v1/albums/${data[1]}`, {
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
