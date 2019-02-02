import firebase from 'firebase';
import axios from 'axios';
// import reverseGeocode from 'latlng-to-zip';
import { Location } from 'expo';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS,
  FILTER_CITY,
  LOGIN_LOAD_COMPANIES
} from './types';

export const cityChanged = (text) => {
  console.log('cityChanged()-text', text);
  return {
    type: FILTER_CITY,
    payload: text
  };
};

export const companiesChanged = (obj) => {
  return {
    type: LOGIN_LOAD_COMPANIES,
    payload: obj
  };
};
          
        
/* THIS FUNCTION IS TO GET DATA TO THE FIREBASE/COMPANIES ROUTE TO BUILD THE DATABASE. 
REMOVE ONCE DB IS COMPLETE */

export const fetchCompanies = callback => async dispatch => {
  // const COMPANY_ROOT = firebase.database().ref('/companies');
  // let companiesArray;
  try {
    // const getCompanies = async () => (
    //    await COMPANY_ROOT
    //   .on('value', snapshot => {
    //     companiesArray = snapshot.val();
    //   })
    // );

    // getCompanies();
  } catch (e) {
    console.log(e, 'catch error in fetchCompanies');
  }
  // console.log('companiesArray in Form_actions', companiesArray); 
  // callback('deck');
};

// this function gets data from techstars and pushes it to firebase
// const JOB_ROOT_URL = 'https://data.techstars.com/v1/companies';
// export const fetchJobs = callback => async (dispatch) => {
//   try {
//     const { data } = await axios.get(JOB_ROOT_URL);
//     const tempData = []; 
//     for (let i = 0; i < 250; i++) {
//       tempData.push(data.items[i]); 
//     }
//     // console.log(tempData, "data data in my fetchJobs");
//     // const getCompanies = async (comp) => await axios.get(comp.href);
//     const companies = await Promise.all(tempData.map(async (company, i) => {
//       // console.log(company.href, 'inside companies form company.href');
//       const { data } = await axios.get(company.href);
//       console.log('data', i);
//       return data;
//     }));
//     console.log(companies, 'items in fetchJobs');
//     firebase.database().ref('/companies').set(companies);    
//     // dispatch({ type: FETCH_JOBS, payload: companies });
//     // callback();
//   } catch (e) {
//     console.log(e, 'catch error in fetchJobs');
//   }
// };

export const likeJob = (job) => ({
    payload: job,
    type: LIKE_JOB
  });


export const clearLikedJobs = () => ({ type: CLEAR_LIKED_JOBS });


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

