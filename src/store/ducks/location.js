export const Types = {
  GET_LOCATIONS_REQUEST: 'GET_LOCATIONS_REQUEST',
  GET_LOCATIONS_SUCCESS: 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_FAILURE: 'GET_LOCATIONS_FAILURE',
};

const INITIAL_STATE = {
  locations: [],
  location: null,
  loading: false,
  errorMsg: null,
};

export default function Location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_LOCATIONS_REQUEST:
      return {...state, loading: true, errorMsg: null};
    case Types.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
        errorMsg: null,
      };
    case Types.GET_LOCATIONS_FAILURE:
      return {...state, loading: false, errorMsg: action.payload};
    default:
      return state;
  }
}

export const Creators = {
  getLocationsRequest: () => ({
    type: Types.GET_LOCATIONS_REQUEST,
  }),

  getLocationsSuccess: (response) => ({
    type: Types.GET_LOCATIONS_SUCCESS,
    payload: response,
  }),

  getLocationsFailure: (message) => ({
    type: Types.GET_LOCATIONS_FAILURE,
    payload: message,
  }),
};
