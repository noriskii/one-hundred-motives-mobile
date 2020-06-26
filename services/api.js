import axios from 'axios';

const api = axios.create({
  baseURL: 'https://one-hundred-motives-api.herokuapp.com'
});

export default api;