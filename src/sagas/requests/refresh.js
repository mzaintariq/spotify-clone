import { tokenEndpoint, redirectUri, clientId } from "../../app/spotify";
const { REACT_APP_CLIENT_SECRET } = process.env;

export function requestGetRefresh(refreshToken) {
  const formBody = `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${REACT_APP_CLIENT_SECRET}`;
  return fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
