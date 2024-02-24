import axios from 'axios';

const API_BASE_URL = '/src/assets/task.json';

const serverAPI = axios.create({
  baseURL: API_BASE_URL,
});

serverAPI.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  return request;
});

export { serverAPI };
