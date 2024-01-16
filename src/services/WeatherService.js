import axios from 'axios';
const API_BASE = 'https://api.open-meteo.com/v1/forecast?';

export const fetchWeatherData = latlng => {
  const endpoint = `${API_BASE}latitude=${latlng[0]}&longitude=${latlng[1]}&current=is_day,apparent_temperature,rain,snowfall`;
  return new Promise(resolve => {
    axios
      .get(endpoint)
      .then(res => {
        if (res.status == 200) {
          let data = res.data;
          resolve(data);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        console.log('Axios error : ', err);
        resolve(null);
      });
  });
};
