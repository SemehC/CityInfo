import axios from 'axios';
const API_BASE = 'https://restcountries.com/v3.1/';

//https://restcountries.com/v3.1/name/fra?fields=name,flags
export const searchCities = cityName => {
  // handle the search stuff
  const endpoint = `${API_BASE}/name/${cityName}?fields=name,flags`;
  return new Promise(resolve => {
    axios
      .get(endpoint)
      .then(res => {
        if (res.status == 200) {
          let data = res.data;
          let normalizedData = data.map((val, index) => {
            return {
              flag: val.flags.png,
              id: index,
              title: val.name.common,
            };
          });
          resolve(normalizedData);
        } else {
          resolve([]);
        }
      })
      .catch(err => {
        resolve([]);
      });
  });
};

export const getCityDetails = cityName => {
  const endpoint = `${API_BASE}/name/${cityName}?fullText=true&fields=name,unMember,currencies,capital,region,subregion,languages,maps,population,continents,flags,coatOfArms,latlng`;
  return new Promise(resolve => {
    axios
      .get(endpoint)
      .then(res => {
        if (res.status == 200) {
          let data = res.data;

          resolve(data[0]);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        resolve(null);
      });
  });
};
