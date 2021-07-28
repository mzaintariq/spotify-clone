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

export const setUserData = data => {
    return {
        type: "SET_USER_DATA",
        payload: data
    }
}