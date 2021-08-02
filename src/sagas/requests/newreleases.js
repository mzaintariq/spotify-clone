export function requestGetNewReleases(accessToken) {
  return fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=PK",
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
