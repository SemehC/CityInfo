import axios from 'axios';
const API_BASE = 'https://api.geotimezone.com/public/timezone?';

export const getLatLngTime = latlng => {
  const endpoint = `${API_BASE}latitude=${latlng[0]}&longitude=${latlng[1]}`;

  return new Promise(resolve => {
    axios
      .get(endpoint)
      .then(res => {
        if (res.status == 200) {
          let data = res.data;
          resolve(data.current_local_datetime);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        resolve(null);
      });
  });
};
