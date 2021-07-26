// export const checkAction = { type: "CHECK" }

// export const setToken = token => {
//     return {
//         type: "SET_TOKEN",
//         payload: token
//     }
// }

export const setAccessToken = accessToken => {
    return {
        type: "SET_ACCESS_TOKEN",
        payload: accessToken
    }
}

export const setRefreshToken = refreshToken => {
    return {
        type: "SET_REFRESH_TOKEN",
        payload: refreshToken
    }
}

export const setExpiresIn = time => {
    return {
        type: "SET_EXPIRES_IN",
        payload: time
    }
}