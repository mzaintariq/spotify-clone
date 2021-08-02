const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private"
]
export const redirectUri = "http://localhost:3000/";
export const clientId = "9c2b9616464949a9a3e68c21250663a0";
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=code&show_dialogue=true`;
export const tokenEndpoint = "https://accounts.spotify.com/api/token";
