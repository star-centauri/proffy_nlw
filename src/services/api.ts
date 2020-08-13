import axios from 'axios';

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://proffy-server-bruna.herokuapp.com/';

const api = axios.create({
    baseURL: URL_BACKEND,
});

export default api;