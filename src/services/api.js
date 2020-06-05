import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://10.0.2.2:3333',
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const {token} = store.getState().auth;
  const newConfig = config;

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

export default api;
