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
  ).then((response) => response.json());
}
