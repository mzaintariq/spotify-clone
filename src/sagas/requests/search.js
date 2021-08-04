export function requestGetSearchResult(data) {
  return fetch(`https://api.spotify.com/v1/search?q=${data[1]}&type=track&market=PK`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${data[0]}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
