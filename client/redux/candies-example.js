// ACTION TYPES
const GET_CANDIES = 'GET_CANDIES';

// ACTION CREATOR
const getCandies = (candies) => ({
  type: GET_CANDIES,
  candies,
});

// THUNK CREATORS
export const fetchCandiesFromServer = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/candies');
    // sending an obj that reducer needs
    dispatch(getCandies(data));
  };
};

// INITIAL STATE
const initialState = {
  candies: [],
  candy: {},
};

// REDUCER
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default reducer;
