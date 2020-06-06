export const Types = {
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
};

const INITIAL_STATE = {
  user: null,
  loading: false,
  errorMsg: null,
};

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_USER_REQUEST:
      return {...state, loading: true, errorMsg: null};
    case Types.UPDATE_USER_SUCCESS:
      return {...state, loading: false, user: action.payload};
    case Types.UPDATE_USER_FAILURE:
      return {...state, loading: false, errorMsg: action.payload};
    default:
      return state;
  }
}

export const Creators = {
  updateUserRequest: (user) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: user,
  }),

  updateUserSuccess: (response) => ({
    type: Types.UPDATE_USER_SUCCESS,
    payload: response,
  }),

  updateUserFailure: (message) => ({
    type: Types.UPDATE_USER_FAILURE,
    payload: message,
  }),
};
