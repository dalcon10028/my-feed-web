import type { AxiosPromise } from 'axios';
import instance from './instance';

interface LoginUserDto {
  email: string;
  password: string;
}

export const userLogin = (loginUserDto: LoginUserDto): AxiosPromise => {
  return instance.post('/users/login', loginUserDto);
};

export const fetchUserProfile = (): AxiosPromise => {
  return instance.get('/users/profile');
};
