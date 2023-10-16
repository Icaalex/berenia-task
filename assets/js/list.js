/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/country-state-city@3.2.0/lib/city.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import cityList from"./assets/city.json";import{compare,convertArrayToObject}from"./utils";const KEYS=["name","countryCode","stateCode","latitude","longitude"];let convertedCityList=[];function getAllCities(t){if(convertedCityList.length)return convertedCityList;return convertedCityList=convertArrayToObject(t,cityList),convertedCityList}function getCitiesOfState(t,e){if(!e)return[];if(!t)return[];return getAllCities(KEYS).filter((r=>r.countryCode===t&&r.stateCode===e)).sort(compare)}function getCitiesOfCountry(t){if(!t)return[];return getAllCities(KEYS).filter((e=>e.countryCode===t)).sort(compare)}function sortByStateAndName(t){return t.sort(((t,e)=>{const r=compare(t,e,(t=>`${t.countryCode}-${t.stateCode}`));return 0!==r?r:compare(t,e)}))}export default{getAllCities:getAllCities,getCitiesOfState:getCitiesOfState,getCitiesOfCountry:getCitiesOfCountry,sortByStateAndName:sortByStateAndName};
//# sourceMappingURL=/sm/10b7bfdb65856de7635287854b2965e1fbc6120ab42570aa6e27f4178d71bc97.map