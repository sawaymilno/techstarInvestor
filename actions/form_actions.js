import firebase from 'firebase';
import axios from 'axios';
// import reverseGeocode from 'latlng-to-zip';
import { Location } from 'expo';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_COMPANY,
  CLEAR_LIKED_COMPANIES,
  FILTER_CITY,
  LOGIN_LOAD_COMPANIES,
  NEW_CUSTOM_LIST
} from './types';

export const cityChanged = (text) => ({ type: FILTER_CITY, payload: text });
export const loadCompanyDatabase = (obj) => {
  console.log(obj, 'companydatabase in loadCompanyDatabase()');
  
  return ({ type: LOGIN_LOAD_COMPANIES, payload: obj });
};


export const buildCustomList = (props) => {
  // const { city } = filterObj;

  console.log(props.city, props.companies, 'in buildCustomList city, companies');

  const results = props.companies.filter(company => company.location.city_name === props.city);
  console.log(results, 'in buildCustomList results');
  props.navigation.navigate('deck');
  return ({ type: NEW_CUSTOM_LIST, payload: results });
};


export const likeCompany = (company) => ({ payload: company, type: LIKE_COMPANY });
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

