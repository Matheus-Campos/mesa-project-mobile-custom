import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://mesa-project.herokuapp.com',
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
