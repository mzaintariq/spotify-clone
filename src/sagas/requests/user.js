export function requestGetUserData(accessToken) {
  return fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
