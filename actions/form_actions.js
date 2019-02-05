// import firebase from 'firebase';
// import axios from 'axios';
// import reverseGeocode from 'latlng-to-zip';
// import { Location } from 'expo';
// import qs from 'qs';
import {
  LIKE_COMPANY,
  CLEAR_LIKED_COMPANIES,
  FILTER_CITY,
  FILTER_STATUS,
  FILTER_TAG,
  LOGIN_LOAD_COMPANIES,
  LOADING_DATA
} from './types';

export const loadCompanyDatabase = (obj) => {
  console.log(obj, 'companydatabase in loadCompanyDatabase()');
  return ({ type: LOGIN_LOAD_COMPANIES, payload: obj });
};


export const cityChanged = (text) => ({ type: FILTER_CITY, payload: text });
export const statusChanged = (text) => ({ type: FILTER_STATUS, payload: text });
export const loadingChanged = (value) => ({ type: LOADING_DATA, payload: value });
export const tagChanged = (tag) => ({type: FILTER_TAG, payload: tag });

export const likeCompany = (company) => ({ type: LIKE_COMPANY, payload: company });
export const clearLikedCompanies = () => ({ type: CLEAR_LIKED_COMPANIES });


/**********************OLD CODE **************************/

// const JOB_ROOT_URL = 'https://authenticjobs.com/api/?';
// const JOB_QUERY_PARAMS = {
//   api_key: 'bd30dde2e8c818a9792851aef058eeae',
//   method: 'aj.jobs.search',
//   perpage: '5',
//   format: 'json',
// };

// const JOB_QUERY_PARAMS = {
//     api_key: 'bd30dde2e8c818a9792851aef058eeae',
//     method: 'aj.jobs.search',
//     perpage: '5',
//     format: 'json',
//   };
  
//   const buildJobsUrl = (zip) => {
//       const query = qs.stringify({ ...JOB_QUERY_PARAMS });
//       return `${JOB_ROOT_URL}${query}`;
//     };
    
//     export const fetchJobs = (region, callback) => async (dispatch) => {
//         try {
//             const zip = await Location.reverseGeocodeAsync(region);
//             const url = buildJobsUrl(zip);
//             console.log(url, 'URL!!!!!!!!');
//             const { data } = await axios.get(url);
//             console.log(data.listings.listing, 'data.listings.listing');
//             dispatch({ type: FETCH_JOBS, payload: data.listings.listing });
//             callback();
//           } catch (e) {
//               console.error(e);
//             }
//           };

