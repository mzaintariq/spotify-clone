export const GET_NEW_RELEASES = "GET_NEW_RELEASES";

export const getNewReleases = (accessToken) => {
  return {
    type: "GET_NEW_RELEASES",
    payload: accessToken,
  };
};

export const setNewReleases = (data) => {
  return {
    type: "SET_NEW_RELEASES",
    payload: data,
  };
};
