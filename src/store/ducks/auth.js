export const Types = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  errorMsg: null,
};

export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {...state, loading: true, errorMsg: null};
    case Types.SIGN_IN_FAILURE:
      return {...state, loading: false, errorMsg: action.payload};
    case Types.SIGN_IN_SUCCESS:
      return {...state, loading: false, errorMsg: null, ...action.payload};
    case Types.LOGOUT:
      return {user: null, token: null, loading: false, errorMsg: null};
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: (user) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: user,
  }),

  signInSuccess: ({token, user}) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: {
      token,
      user,
    },
  }),

  signInFailure: (message) => ({
    type: Types.SIGN_IN_FAILURE,
    payload: message,
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};
