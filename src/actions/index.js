import axios from 'axios';

const API_KEY = '79239789a30e55db2687985942f7ab3b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city}&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}