import {
  FETCH_JOBS,
  FILTER_CITY,
  LOGIN_LOAD_COMPANIES
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  city: '',
  loading: false,
  companies: {} 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_CITY:
      return { ...state, city: action.payload };
    case FETCH_JOBS:
      return { ...state, results: action.payload };
    case LOGIN_LOAD_COMPANIES:
      return { ...state, companies: action.payload };
    default:
      return state;
  }
}
