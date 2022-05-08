import { TokenStorage } from '@/utils/localStorage';
import axios, { type AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_MY_FEED_API,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('myfeed-token')}`
  }
});

export const fetchToken = (token: string) => {
  TokenStorage.setToken(token);
  instance.interceptors.request.use((config: AxiosRequestConfig) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }));
};
