import { NEW_CUSTOM_LIST } from './/types';


export const buildCustomList = (props) => {
  let count = 0;
  const results = props.companies.filter(company => {

    const companyCity = company.location.city_name.toLowerCase();
    const companyStatus = company.status.toLowerCase();


    const inputCity = props.city.toLowerCase();
    const inputStatus = props.status.toLowerCase();


    const cityCheck = (inputCity === '') ? true : inputCity === companyCity;
    const statusCheck = (inputStatus === '') ? true : inputStatus === companyStatus;


    const condition = (
      cityCheck &&
      statusCheck
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
