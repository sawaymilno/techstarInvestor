import { REHYDRATE } from 'redux-persist';
import {
  LIKE_COMPANY,
  CLEAR_LIKED_COMPANIES
} from '../actions/types';

export default function (state = { results: [] }, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedCompanies || [];
    case CLEAR_LIKED_COMPANIES:
      return { ...state, results: [] };
    case LIKE_COMPANY:
      // console.log('action.payload', action.payload);
    
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    default:
      return state;
  }
}
