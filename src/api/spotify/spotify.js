// export const authEndpoint = "https://accounts.spotify.com/authorize";

const authUrl = "https://accounts.spotify.com/authorize";
const tokenUrl = "https://accounts.spotify.com/api/token";
const redirectUri = "http://localhost:3000/";
const clientId = "9c2b9616464949a9a3e68c21250663a0";
const clientSecret = "a866fad991494333ae0dcb8f7fef0fcf";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialogue=true`

export const getToken = async (code) => {
    try {
        const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`
        const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
    
}