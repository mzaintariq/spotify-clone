const initialState = {
  value: 0,
  name: 'spotify',
  isPerson: true
};

const check = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        ...state,
        value: state.value + 1,
        name: 'SPOTIFY'
      };
    default:
      return state;
  }
}

export default check