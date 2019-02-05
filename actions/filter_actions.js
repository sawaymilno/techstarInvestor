import { NEW_CUSTOM_LIST } from './/types';


export const buildCustomList = (props) => {
  let count = 0;
  const results = props.companies.filter(company => {

    const companyCity = company.location.city_name.toLowerCase();
    const companyStatus = company.status.toLowerCase();
    const companyTagsArray = company.tags


    const inputCity = props.city.toLowerCase();
    const inputStatus = props.status.toLowerCase();
    const inputTagsArray = props.tags;


    const cityCheck = (inputCity === '') ? true : inputCity === companyCity;
    const statusCheck = (inputStatus === '') ? true : inputStatus === companyStatus;
    const tagsCheck = (inputTagsArray.length === 0) ? true : companyTagsArray.some(tag => {
      return inputTagsArray.includes(tag)
    })


    const condition = (
      cityCheck &&
      statusCheck &&
      tagsCheck
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
