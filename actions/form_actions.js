import {
  LIKE_COMPANY,
  CLEAR_LIKED_COMPANIES,
  FILTER_NAME,
  FILTER_CITY,
  FILTER_STATE,
  FILTER_COUNTRY,
  FILTER_STATUS,
  FILTER_TAG,
  CLEAR_FORM,
  LOGIN_LOAD_COMPANIES,
  LOADING_DATA
} from './types';

export const loadCompanyDatabase = (obj, callback) => {
  console.log(obj, 'companydatabase in loadCompanyDatabase()');

  return ({ type: LOGIN_LOAD_COMPANIES, payload: obj });
};

export const nameChanged = (text) => ({ type: FILTER_NAME, payload: text });
export const cityChanged = (text) => ({ type: FILTER_CITY, payload: text });
export const stateChanged = (text) => ({ type: FILTER_STATE, payload: text });
export const countryChanged = (text) => ({ type: FILTER_COUNTRY, payload: text });
export const statusChanged = (text) => ({ type: FILTER_STATUS, payload: text });
export const loadingChanged = (value) => ({ type: LOADING_DATA, payload: value });
export const tagChanged = (tag) => ({ type: FILTER_TAG, payload: tag });

export const clearForm = () => ({ type: CLEAR_FORM });
export const likeCompany = (company) => ({ type: LIKE_COMPANY, payload: company });
export const clearLikedCompanies = () => ({ type: CLEAR_LIKED_COMPANIES });
