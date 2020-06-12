import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

// ACTION CREATOR
const getUser = (user) => ({
  type: GET_USER,
  user,
});
const setUser = (user) => ({
  type: SET_USER,
  user,
});

// THUNK CREATORS
export const loginInServer = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.put('api/login', userInfo);
    dispatch(getUser(data));
  };
};

export const signupInServer = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/signup', userInfo);
    dispatch(setUser(data));
  };
};

// INITIAL STATE
const initialState = {
  user: {},
};

// REDUCER
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
