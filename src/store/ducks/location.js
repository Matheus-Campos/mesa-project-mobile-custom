export const Types = {
  GET_LOCATIONS_REQUEST: 'GET_LOCATIONS_REQUEST',
  GET_LOCATIONS_SUCCESS: 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_FAILURE: 'GET_LOCATIONS_FAILURE',
  GET_LOCATION_REQUEST: 'GET_LOCATION_REQUEST',
  GET_LOCATION_SUCCESS: 'GET_LOCATION_SUCCESS',
  GET_LOCATION_FAILURE: 'GET_LOCATION_FAILURE',
  RATE_LOCATION_REQUEST: 'RATE_LOCATION_REQUEST',
  RATE_LOCATION_SUCCESS: 'RATE_LOCATION_SUCCESS',
  RATE_LOCATION_FAILURE: 'RATE_LOCATION_FAILURE',
};

const INITIAL_STATE = {
  locations: [],
  selectedLocation: null,
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
    case Types.GET_LOCATION_REQUEST:
      return {...state, loading: true, errorMsg: null};
    case Types.GET_LOCATION_SUCCESS:
      return {...state, loading: false, selectedLocation: action.payload};
    case Types.GET_LOCATION_FAILURE:
      return {...state, loading: false, errorMsg: action.payload};
    case Types.RATE_LOCATION_REQUEST:
      return {...state, loading: true};
    case Types.RATE_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedLocation: {
          ...state.selectedLocation,
          ratings: [action.payload, ...state.selectedLocation.ratings],
        },
      };
    case Types.RATE_LOCATION_FAILURE:
      return {...state, loading: false};
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

  getLocationRequest: (locationId) => ({
    type: Types.GET_LOCATION_REQUEST,
    payload: locationId,
  }),

  getLocationSuccess: (response) => ({
    type: Types.GET_LOCATION_SUCCESS,
    payload: response,
  }),

  getLocationFailure: (message) => ({
    type: Types.GET_LOCATION_FAILURE,
    payload: message,
  }),

  rateLocationRequest: (rating) => ({
    type: Types.RATE_LOCATION_REQUEST,
    payload: rating,
  }),

  rateLocationSuccess: (response) => ({
    type: Types.RATE_LOCATION_SUCCESS,
    payload: response,
  }),

  rateLocationFailure: () => ({
    type: Types.RATE_LOCATION_FAILURE,
  }),
};
