import {
  FETCH_JOBS,
  CITY_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  city: ''
};

export default function (state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case CITY_CHANGED:
      return { ...state, city: action.payload };
    case FETCH_JOBS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
}
