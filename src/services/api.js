import axios from 'axios';
import {AsyncStorage} from 'react-native';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://10.0.2.2:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@user:token');
  const newConfig = config;

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

export default api;
