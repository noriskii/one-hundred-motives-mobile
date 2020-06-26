import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e1db4b04e908.ngrok.io'
});

export default api;