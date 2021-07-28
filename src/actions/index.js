export const GET_TOKEN = "GET_TOKEN";
const SET_TOKEN = "SET_TOKEN";

export const getToken = (code) => {
    return {
        type: "GET_TOKEN",
        payload: code
    }
}

export const setToken = (data) => {
    return {
        type: "SET_TOKEN",
        payload: data
    }
}

export const GET_USER_DATA = "GET_USER_DATA";
const SET_USER_DATA = "SET_USER_DATA";

export const getUserData = (accessToken) => {
    return {
        type: "GET_USER_DATA",
        payload: accessToken
    }
}

export const setUserData = (data) => {
    return {
        type: "SET_USER_DATA",
        payload: data
    }
}