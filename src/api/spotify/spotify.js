export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "9c2b9616464949a9a3e68c21250663a0";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialogue=true`


const code = new URLSearchParams(window.location.search).get('code');
// const clientId = "9c2b9616464949a9a3e68c21250663a0";
const clientSecret = "a866fad991494333ae0dcb8f7fef0fcf";
const formBody = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=${clientId}&client_secret=${clientSecret}`

export const getToken = async () => {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
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