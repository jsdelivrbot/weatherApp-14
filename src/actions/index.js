import axios from 'axios';

const API_KEY = '34bda3f9626ba82803a0bb312c95daab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},hu`;
  const request = axios.get(url);

  console.log('Request', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
