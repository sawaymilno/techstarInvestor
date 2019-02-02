import {
  FILTER_CITY,
  LOGIN_LOAD_COMPANIES,
  NEW_CUSTOM_LIST
} from '../actions/types';

const INITIAL_STATE = {
  city: '',
  loading: false,
  companies: [],
  newList: [] 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_CITY:
      return { ...state, city: action.payload };
    case LOGIN_LOAD_COMPANIES:
      return { ...state, companies: action.payload };
    case NEW_CUSTOM_LIST:
    return { ...state, newList: action.payload };
    default:
      return state;
  }
}
