import { NEW_CUSTOM_LIST } from './/types';


export const buildCustomList = (props) => {
  let count = 0;
  const results = props.companies.filter(company => {
    const companyName = company.name.toLowerCase();
    const companyCity = company.location.city_name.toLowerCase();
    const companyState = company.location.state_province_code.toLowerCase();
    const companyCountry = company.location.country_code.toLowerCase();
    const companyStatus = company.status.toLowerCase();
    const companyTagsArray = company.tags;

    const inputName = props.name.toLowerCase();
    const inputCity = props.city.toLowerCase();
    const inputState = props.state.toLowerCase();
    const inputCountry = props.country.toLowerCase();
    const inputStatus = props.status.toLowerCase();
    const inputTagsArray = props.tags;

    const nameCheck = (inputName === '') ? true : inputName === companyName;
    const cityCheck = (inputCity === '') ? true : inputCity === companyCity;
    const stateCheck = (inputState === '') ? true : inputState === companyState;
    const companyCheck = (inputCountry === '') ? true : inputCountry === companyCountry;
    const statusCheck = (inputStatus === '') ? true : inputStatus === companyStatus;
    const tagsCheck = (inputTagsArray.length === 0) ? true : companyTagsArray.some(tag => inputTagsArray.includes(tag));


    const condition = (
      cityCheck &&
      statusCheck &&
      tagsCheck &&
      nameCheck &&
      stateCheck &&
      companyCheck
    );

    if (condition) {
      count++;
      return true;
    }
     
     return false;  
  });
  console.log(count, 'count');
  props.navigation.navigate('deck');
  return ({ type: NEW_CUSTOM_LIST, payload: results });
};
