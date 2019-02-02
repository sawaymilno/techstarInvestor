import { REHYDRATE } from 'redux-persist';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from '../actions/types';

export default function (state = { results: [] }, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedJobs || [];
    case CLEAR_LIKED_JOBS:
      return { ...state, results: [] };
    case LIKE_JOB:
      // console.log('action.payload', action.payload);
    
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    default:
      return state;
  }
}
