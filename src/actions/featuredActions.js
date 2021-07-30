export const GET_FEATURED = "GET_FEATURED";
const SET_FEATURED = "SET_FEATURED";

export const getFeatured = (accessToken) => {
    return {
        type: "GET_FEATURED",
        payload: accessToken
    }
}

export const setFeatured = (data) => {
    return {
        type: "SET_FEATURED",
        payload: data
    }
}