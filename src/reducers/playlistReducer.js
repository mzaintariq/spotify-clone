const initialState = {
  playlistData: null,
};

const playlistReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlistData: data,
      };
    case "SET_MORE_PLAYLIST_TRACKS":
      return {
        ...state,
        playlistData: {
          ...state.playlistData,
          tracks: {
            ...state.playlistData.tracks,
            items: [...state.playlistData.tracks.items, ...data.items],
            next: data.next,
          },
        },
      };
    default:
      return state;
  }
};

export default playlistReducer;
