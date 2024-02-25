import axios from 'axios';
let API_BASE_URL;
if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = '/task/task.json';
} else {
  API_BASE_URL = '/olimpia/task/task.json';
}

const serverAPI = axios.create({
  baseURL: API_BASE_URL,
});

serverAPI.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  return request;
});

export { serverAPI };
