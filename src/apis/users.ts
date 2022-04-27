import type { AxiosPromise } from 'axios';
import instance from './instance';

export const fetchUserProfile = (): AxiosPromise => {
  return instance.get('/users/profile');
};
