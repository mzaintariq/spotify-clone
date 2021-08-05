export function requestGetSearchResult(data) {
  return fetch(
    `https://api.spotify.com/v1/search?q=${data[1]}&type=track%2Cartist%2Cplaylist%2Calbum&market=PK&limit=50`,
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
