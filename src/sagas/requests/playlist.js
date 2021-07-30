export function requestGetPlaylist(data) {
    return fetch(`https://api.spotify.com/v1/playlists/${data[1]}?market=PK`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${data[0]}`,
            "Content-Type": "application/json"
        }
    }).then((response) => response.json());
}