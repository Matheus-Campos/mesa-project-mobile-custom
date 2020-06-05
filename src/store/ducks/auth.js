export const Types = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
};

const INITIAL_STATE = {
  user: null,
  loading: false,
};

export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {...state, loading: true};
    case Types.SIGN_IN_FAILURE:
      return {...state, loading: false};
    case Types.SIGN_IN_SUCCESS:
      return {...state, loading: false, user: action.payload};
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: (user) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: user,
  }),

  signInSuccess: (response) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: response,
  }),

  signInFailure: () => ({
    type: Types.SIGN_IN_FAILURE,
  }),
};
