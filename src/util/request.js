import axios from 'axios';
import storageService from '../service/storageService';

const service = axios.create({
  baseURL: 'http://47.104.177.6/api/',
  timeout: 1000 * 5,
});
// Add a request interceptor
service.interceptors.request.use((config) => {
  // Do something before request is sent
  Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` });
  return config;
}, (error) => (Promise.reject(error)));

export default service;
