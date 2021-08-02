export const GET_PLAYLIST = "GET_PLAYLIST";
const SET_PLAYLIST = "SET_PLAYLIST";

export const getPlaylist = (accessToken) => {
    return {
        type: "GET_PLAYLIST",
        payload: accessToken
    }
}

export const setPlaylist = (data) => {
    return {
        type: "SET_PLAYLIST",
        payload: data
    }
}