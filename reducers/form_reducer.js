import {
  CLEAR_FORM,
  LOGIN_LOAD_COMPANIES,
  LOADING_DATA,
  FILTER_NAME,
  FILTER_CITY,
  FILTER_STATE,
  FILTER_COUNTRY,
  FILTER_STATUS,
  FILTER_TAG,
  NEW_CUSTOM_LIST
} from '../actions/types';


const INITIAL_STATE = {
  name: '',
  city: '',
  state: '',
  country: '',
  status: '',
  tags: [],
  formLoading: true,
  companies: [],
  newList: [] 
};


export default function (state = INITIAL_STATE, action) {
switch (action.type) {
  case CLEAR_FORM:
    return { 
      ...state, 
      name: '',
      city: '',
      state: '',
      country: '',
      status: '', 
    };
  case LOGIN_LOAD_COMPANIES:
    return { ...state, companies: action.payload, formLoading: false };
  case LOADING_DATA:
    return { ...state, formLoading: action.payload };
  case FILTER_NAME:
    return { ...state, name: action.payload };
  case FILTER_CITY:
    return { ...state, city: action.payload };
  case FILTER_STATE:
    return { ...state, state: action.payload };
  case FILTER_COUNTRY:
    return { ...state, country: action.payload };
  case FILTER_STATUS:
    return { ...state, status: action.payload };
  case FILTER_TAG:
    return { ...state, tags: [...state.tags, action.payload] };
  case NEW_CUSTOM_LIST:
  return { 
      ...state, 
      newList: action.payload, 
      name: '',
      city: '',
      state: '',
      country: '',
      status: '', 
    };
  default:
    return state;
}
}
