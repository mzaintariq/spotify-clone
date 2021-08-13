const initialState = {
  categoryData: null,
  categoryPlaylists: null,
};

const categoryReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_CATEGORY_DATA":
      return {
        ...state,
        categoryData: data,
      };
    case "SET_CATEGORY_PLAYLISTS":
      return {
        ...state,
        categoryPlaylists: data.playlists,
      };
    default:
      return state;
  }
};

export default categoryReducer;
